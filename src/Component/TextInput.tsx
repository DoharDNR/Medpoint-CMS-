import React from 'react';

interface TextInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  icon?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  error,
  icon,
}) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
        {label}
      </label>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${error ? 'red' : '#ccc'}`,
          borderRadius: '4px',
          padding: '8px',
          backgroundColor: disabled ? '#f5f5f5' : 'white',
        }}
      >
        {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            backgroundColor: 'transparent',
            fontSize: '14px',
          }}
        />
      </div>

      {error && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{error}</p>}
    </div>
  );
};

export default TextInput;