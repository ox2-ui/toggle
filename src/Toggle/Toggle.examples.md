### Toggle


On:

    initialState = { mySetting: true };
    const handleChange = (value) => setState({ mySetting: value });


    <Toggle
      value={state.mySetting}
      label={'My label'}
      onChange={handleChange}
    />

Off:

    initialState = { mySetting: false };
    const handleChange = (value) => setState({ mySetting: value });


    <Toggle
      value={state.mySetting}
      label={'My label'}
      onChange={handleChange}
    />

Disabled:

    initialState = { mySetting: true };
    const handleChange = (value) => setState({ mySetting: value });


    <Toggle
      value={state.mySetting}
      disabled={true}
      label={'My label'}
      onChange={handleChange}
    />

Custom color:

    initialState = { mySetting: true };
    const handleChange = (value) => setState({ mySetting: value });


    <Toggle
      value={state.mySetting}
      color={'#3498db'}
      label={'My label'}
      onChange={handleChange}
    />

No label:

    const handleChange = (value) => setState({ mySetting: value });

    <Toggle
      value={state.mySetting}
      value={state.mySetting}
      onChange={handleChange}
    />

Uncontrolled:

    const handleChange = (value) => console.log('🍇', value);

    <Toggle
      label={'My label'}
      onChange={handleChange}
    />

