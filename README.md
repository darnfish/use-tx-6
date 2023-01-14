# useTX6
A set of React hooks for interacting with teenage engineering TX-6 over BLE MIDI

## Installation
```
yarn add use-tx-6
```

## Usage
The following demo will let you adjust the font size of the text using the slider for channel 1:
```tsx
import useTX6, { useTX6Attribute } from 'use-tx-6'

export default function App() {
  const { connect, status, error } = useTX6()

  const { progress } = useTX6Attribute('input1.slider')

  switch(status) {
  case 'disconnected':
    return (
      <>
        <button onClick={connect}>connect to TX-6</button>
        {error && (
          <p>error connecting to TX-6: {error.toString()}</p>
        )}
      </>
    )
  case 'connecting':
    return (
      <p>connecting to TX-6...</p>
    )
  }

  return (
    <span style={{ fontSize: `${progress * 100}px` }}>connected to TX-6</span>
  )
}
```

If you want to access multiple attributes at the same time, use `useTX6Attributes`—this is useful for the EQ knobs:
```tsx
const [{ progress: eq1 }, { progress: eq2 }, { progress: eq3 }] = useTX6Attributes(['input1.eq1', 'input1.eq2', 'input1.eq3'])
```

## Thanks
Inspired by [this demo](https://twitter.com/hturan/status/1523702486258782208) by [@hturan@twitter.com](https://twitter.com/hturan).

## License
MIT
