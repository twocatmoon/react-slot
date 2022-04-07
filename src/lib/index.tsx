import { createContext, useContext, useReducer } from 'react'
import { nanoid } from 'nanoid'

export type Store <State> = {
    state: State | null
    dispatch: React.Dispatch<ActionPayload<any>>
}

export type CreateStoreOptions = {
    storageKey?: string,
    storageType?: 'local' | 'session'
}

export type Reducer <State> = (
    prevState: State,
    actionPayload: ActionPayload
) => State

export type ActionPayload <Input = any> = [
    actionId: string,
    data: Input, 
]

export type ActionMap = {
    [key: string]: Action<any, any>
}

export type Action <Input, State> = {
    (...args: (Input extends undefined ? [data?: undefined] : [data: Input])): ActionPayload<Input>
    id: string
    resolve: (state: State, data: Input) => State
}

export function action <Input, State> (resolve: Action<Input, State>['resolve']): Action<Input, State> {
    const id = nanoid(8)

    function action (data?: Input): ActionPayload<Input> {
        return [id, (data === undefined ? null : data) as Input]
    }

    action.id = id
    action.resolve = resolve

    return action as Action<Input, State>
}

export function mapActionsToIds (obj: ActionMap) {
    return Object
        .entries(obj)
        .reduce<{ [key: string]: Action<any, any> }>((map, value) => {
            map[value[1].id] = value[1]
            return map
        }, {})
}

export function createStore <State> (initialState: State, actions: ActionMap, options?: CreateStoreOptions) {
    let storageApi: Storage | undefined

    if (typeof window !== 'undefined' && options?.storageKey && options?.storageType) {
        storageApi = options.storageType === 'local'
            ? localStorage
            : sessionStorage
    }

    if (storageApi) {
        try {
            const storedStateData = storageApi.getItem(options!.storageKey!)
            if (storedStateData !== null) {
                initialState = JSON.parse(storedStateData)
            }
        } catch {
            throw new Error('Unable to parse stored data for store.')
        }
    }

    const store = createContext<Store<State>>({
        state: initialState || null,
        dispatch: null as any
    })

    const mappedActions = mapActionsToIds(actions)

    const Provider = (props: { children: React.ReactNode }) => {
        const [ state, dispatch ] = useReducer<Reducer<State>>((state, payload) => {
            const [ actionId, data ] = payload
            const action = mappedActions[actionId]

            console.log(payload, mappedActions)
    
            if (!action) {
                throw new Error(`Action with ID '${actionId}' does not exist for this store.`)
            }
    
            const result = action.resolve(state, data)
            
            if (storageApi) {
                storageApi.setItem(options!.storageKey!, JSON.stringify(result))
            }
            
            return result
        }, initialState)

        return (
            <store.Provider value={{ state, dispatch }}>
                {props.children}
            </store.Provider>
        )
    }

    const useStore = () => {
        const { state, dispatch } = useContext(store)

        return [
            state,
            dispatch
        ] as [ State, React.Dispatch<ActionPayload<any>> ]
    }

    return {
        Provider,
        useStore
    }
}
