<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/twocatmoon/react-slot">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">React Slot</h3>

  <p align="center">
    A cleaner alternative for managing children in React components via named slots.
    <br />
    <a href="https://twocatmoon.github.io/react-slot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/twocatmoon/react-slot/issues">Report Bug</a>
    ·
    <a href="https://github.com/twocatmoon/react-slot/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

React Slot implements a content distribution API inspired by Vue.js and the Web Components spec draft, using the `<Slot>` element to serve as distribution outlet for content.

This allows you to compose components like this:
```tsx
<SectionHeader>
  <Slot name='title'>Hello</Slot>
  <Slot name='subtitle'>Lorem ipsum dolor sit amet.</Slot>
</SectionHeader>
```

Then in the template for `<Header>`, you might have:
```tsx
const slots = findSlots(props.children)

return (
  <header>
    <h1>{slots.title}</h1>
    <p>{slots.subtitle}</p>
  </header>
)
```

Slots can contain any template code, including HTML or even other components.

Any children not contained inside of a `<Slot>` will be assigned to `slots.defaultSlot`.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [TypeDoc](https://typedoc.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- INSTALLATION -->
## Installation

1. Install from NPM
   ```sh
   npm i @twocatmoon/react-slot
   ```
2. Include in your project
   ```ts
   import { Slot, findSlots } from '@twocatmoon/react-slots'
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_Please refer to the [Documentation](https://twocatmoon.github.io/react-slot)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter - [@twocatmoon](https://twitter.com/twocatmoon)

Project Link - [https://github.com/twocatmoon/react-slot](https://github.com/twocatmoon/react-slot)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/twocatmoon/react-slot.svg?style=for-the-badge
[contributors-url]: https://github.com/twocatmoon/react-slot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/twocatmoon/react-slot.svg?style=for-the-badge
[forks-url]: https://github.com/twocatmoon/react-slot/network/members
[stars-shield]: https://img.shields.io/github/stars/twocatmoon/react-slot.svg?style=for-the-badge
[stars-url]: https://github.com/twocatmoon/react-slot/stargazers
[issues-shield]: https://img.shields.io/github/issues/twocatmoon/react-slot.svg?style=for-the-badge
[issues-url]: https://github.com/twocatmoon/react-slot/issues
[license-shield]: https://img.shields.io/github/license/twocatmoon/react-slot.svg?style=for-the-badge
[license-url]: https://github.com/twocatmoon/react-slot/blob/master/LICENSE