# useTX6
A set of React hooks for interacting with teenage engineering TX-6 over BLE MIDI

## Installation
```
yarn add use-tx-6
```

## Usage
The following demo will let you adjust the font size of the text using the slider for channel 1:
```ts
import useTX6, { useTX6Attribute } from 'use-tx-6'

export default function App() {
	const { tx6, status, error, connect } = useTX6()

	const { progress } = useTX6Attribute(tx6, 'input1.slider')

	// Other possibilities
	const { pressed } = useTX6Attribute(tx6, 'select.button')
	const { direction } = useTX6Attribute(tx6, 'select.encoder')

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

If you want to access multiple attributes at the same time, use `useTX6Attribute`—this is useful for the EQ knobs:
```ts
const [{ progress: eq1 }, { progress: eq2 }, { progress: eq3 }] = useTX6Attributes(tx6, ['input1.eq1', 'input1.eq2', 'input1.eq3'])
```

## License
MIT
