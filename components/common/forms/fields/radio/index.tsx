import { Controller } from "react-hook-form";
import { Text } from "@components/common";
import { Subtext, Wrapper as Container } from "../sharedStyles";
import { Wrapper, RadioGroupRadio, RadioGroupIndicator, Root } from "./styles";

const RadioGroup = ({
  label,
  name,
  required,
  error,
  disabled,
  hint,
  control,
  items,
}: RadioTypes) => {
  console.log("erro", error);
  const subtext = () => {
    let values = { text: undefined, color: undefined };
    (!!error && !!hint) || (!!error && !hint)
      ? (values = { text: error, color: "$warning" })
      : (values = { text: hint, color: "$navy300" });
    return values;
  };
  return (
    <Container>
      {label && <Text variant="Body-xSmall">{label}</Text>}
      <Root aria-label={label}>
        <Controller
          control={control}
          name={name}
          rules={{ required: required }}
          render={({ field }) => (
            <>
              {items.map((item: any) => {
                return (
                  <Wrapper
                    {...field}
                    key={item.value}
                    required={required}
                    disabled={disabled}
                  >
                    <RadioGroupRadio
                      value={item.value}
                      error={!!error}
                      disabled={disabled}
                    >
                      <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Text variant="Body-xSmall">{item.label}</Text>
                  </Wrapper>
                );
              })}
            </>
          )}
        />
      </Root>
      {(error || hint) && (
        <Subtext css={{ color: subtext().color }}>{subtext().text}</Subtext>
      )}
    </Container>
  );
};

type RadioTypes = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  control?: any;
  items: Array<{
    value: string;
    label: string;
  }>;
};

export default RadioGroup;
