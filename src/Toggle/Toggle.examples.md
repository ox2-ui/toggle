### Toggle


On:

    const handleChange = (value) => setState({ mySetting: value });
    initialState = { mySetting: true };


    <Toggle
      value={state.mySetting}
      label={'My label'}
      onChange={handleChange}
    />

Off:

    const handleChange = (value) => setState({ mySetting: value });
    initialState = { mySetting: false };


    <Toggle
      value={state.mySetting}
      label={'My label'}
      onChange={handleChange}
    />

Disabled:

    const handleChange = (value) => setState({ mySetting: value });
    initialState = { mySetting: true };


    <Toggle
      value={state.mySetting}
      disabled={true}
      label={'My label'}
      onChange={handleChange}
    />

Custom color:

    const handleChange = (value) => setState({ mySetting: value });
    initialState = { mySetting: true };


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

