import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 3px 7px;
`;

const Text = styled.div`
  font-family: 'Roboto Condensed';
  font-size: 18px;
  color: #1b160e;
  opacity: ${props => props.disabled ? '0.5' : '1'}
`;

const Wrapper = styled.div`
  position: relative;
  pointer-events: auto;
  margin: -5px;
  padding: 5px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;

const Input = styled.input`
  display: none;

  &:checked + span {
    border-color: ${props => props.color};
    background-color: ${props => props.color};
  }

  &:disabled + span {
    opacity: 0.4;
  }

  &:checked + span i {
    transform: translate3d(22px, 0, 0);
    background-color: #fff;
  }
`;

const Track = styled.span`
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: background-color, border;
  display: inline-block;
  box-sizing: border-box;
  width: 54px;
  height: 32px;
  border: solid 2px #E5E5E5;
  border-radius: 20px;
  background-color: #E5E5E5;
  content: ' ';
  cursor: pointer;
  pointer-events: none;
`;


const Handle = styled.i`
  transition: 0.2s ease-in-out;
  position: absolute;
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background-color: #fff;
  top: 7px;
  left: 7px;

  &:before {
    position: absolute;
    top: -4px;
    left: -22px;
    padding: 19px 35px;
    content: " ";
  }
`;


/**
 * Toggle Component
 */
const Toggle = (props) => {
  const { color, className, style, label, labelStyle, disabled, onChange, value } = props;

  return (
    <Label style={style} className={className}>
      { label &&
        <Text style={labelStyle} disabled={disabled}>{label}</Text>
      }
      <Wrapper>
        <Input
          type="checkbox"
          color={color || '#2ecc71'}
          disabled={disabled}
          checked={value ? true : false } // eslint-disable-line no-unneeded-ternary
          onChange={(event) => onChange(event.target.checked)} // eslint-disable-line react/jsx-handler-names
        />
        <Track>
          <Handle />
        </Track>
      </Wrapper>
    </Label>
  );
};

Toggle.propTypes = {
  /**
   * ClassName of the root element
   */
  className: PropTypes.string,
  /**
   * Color of the toggle button
   */
  color: PropTypes.string,
  /**
   * Will disable the toggle if true.
   */
  disabled: PropTypes.string,
  /**
   * Label for toggle.
   */
  label: PropTypes.string,
  /**
   * Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: PropTypes.string,
  /**
   * Callback function that is fired when the toggle switch is toggled.
   */
  onChange: PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.string,
  /**
   * Value for when using controlled toggle.
   */
  value: PropTypes.string,
};

export default Toggle;
