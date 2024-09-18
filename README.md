A customizable toggle-switch component for React.

- **Customizable** - Greatly customizable using props and classes.
- **It Just Works** - Sensible default styling. Uses module css file which is automatically inserted to code, so no need to import a separate css file.


## Installation

To use this package in your React project, you can install it using npm or yarn:

```bash
npm install --save react-animated-switch
```

or

```bash
yarn add react-animated-switch
```


## Usage

```javascript
import React, { useState } from "react"
import { Switch } from "react-animated-switch"

function App() {
  const [checked, setChecked] = useState<boolean>(false)

  const onChange = (value: boolean) => {
    setChecked(value)
  }

  return (
    <div>
      <Switch checked={checked} onChange={(value: boolean) => onChange(value)} />
    </div>
  )
}

export default App

```


## API

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| checked                               | bool              | **Required**                                                                             | If true, the switch is set to checked. If false, it is not checked.                                                                                                                                                       |
| onChange _(value:boolean)_ | func              | **Required**                                                                             | Invoked when the user clicks or drags the switch. It is passed three arguments: _checked_, which is a boolean that describes the presumed future state of the checked prop (1), the event object (2) and the id prop (3). |                                                                           |
| inActiveTrackColor                              | string            | '#D3D3D3'                                                                                   | The switch track will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                                     |
| activeTrackColor                              | string            | '#0097EB'                                                                                   | The switch track will take on this color when it is checked. Only accepts hex-colors.
| inActiveThumbColor                              | string            | '#FFFFFF'                                                                                   | The switch thumb will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                                     |
| activeThumbColor                              | string            | '#FFFFFF'                                                                                   | The switch thumb will take on this color when it is checked. Only accepts hex-colors.                                                                                                                        |
| height                                | number            | 28                                                                                       | The height of the background of the switch, measured in pixels.                                                                                                                                                           |
| width                                 | number            | 56                                                                                       | The width of the background of the switch, measured in pixels.                                                                                                                                                            |
| mainClassName                             | string            | _undefined_                                                                              | Set as the className of the outer shell of the switch. Useful for positioning the switch.         
| trackClassName                             | string            | _undefined_                                                                              | Set as the className of track of the switch.         
| thumbClassName                             | string            | _undefined_                                                                              | Set as the className of thumb of the switch.              

---

**NOTE**: When passing className as prop you may have to use !important with styling to overwrite the default styles

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/50287765?v=4" width="120">
        <br />
        <a href="https://github.com/Waseem6409/">Waseem Munir<a/>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT
