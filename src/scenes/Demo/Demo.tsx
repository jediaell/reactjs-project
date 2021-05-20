import React, { ChangeEvent, memo } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  Icon,
  If,
  LoadingIndicator,
  Paper,
  SceneWrapper,
  Select,
  Typography,
} from '~/components';
import { MockAvatars } from '~/utils';
import { ComponentsGroup, WrapperComponent } from './styles';

type Props = {
  selectValues: ValuesProps[];
  handlePress(): void;
  handleChangeInput(event: ChangeEvent<HTMLInputElement>): void;
  handleChangeSelect(event: ChangeEvent<HTMLSelectElement>): void;
};

const Demo: React.FC<Props> = ({
  selectValues,
  handlePress,
  handleChangeInput,
  handleChangeSelect,
}) => (
  <SceneWrapper>
    <Typography>DEMO</Typography>

    <WrapperComponent>
      <Typography variant="h3">Avatar</Typography>
      <ComponentsGroup>
        <Avatar
          alt="Avatar default"
          src={MockAvatars.default}
          onPress={handlePress}
        />
        <Avatar
          variant="rounded"
          alt="Avatar rounded"
          src={MockAvatars.default}
          onPress={handlePress}
        />
        <Avatar
          variant="square"
          alt="Avatar square"
          src={MockAvatars.default}
          onPress={handlePress}
        />
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography variant="h3">Botão</Typography>

      <ComponentsGroup>
        <Button onPress={handlePress}>Texto</Button>
        <Button loading onPress={handlePress}>
          Texto
        </Button>
        <Button disabled onPress={handlePress}>
          Texto
        </Button>
        <Button secondary onPress={handlePress}>
          Texto
        </Button>
        <Button secondary loading onPress={handlePress}>
          Texto
        </Button>
        <Button secondary disabled onPress={handlePress}>
          Texto
        </Button>
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography variant="h3">Checkbox</Typography>

      <ComponentsGroup>
        <Checkbox
          name="checkbox-1"
          label="Texto"
          checked
          onChange={handleChangeInput}
        />
        <Checkbox
          name="checkbox-2"
          label="Texto"
          checked={false}
          error="Errou"
          onChange={handleChangeInput}
        />
        <Checkbox
          name="checkbox-3"
          label="Texto"
          checked={false}
          onChange={handleChangeInput}
        />
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography variant="h3">Icon</Typography>

      <ComponentsGroup>
        <Icon name="checkbox" />
        <Icon name="checkbox" size="large" />
        <Icon name="checkbox" size="small" />
        <Icon name="checkbox" color="primary" />
        <Icon name="checkbox" color="secondary" />
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography variant="h3">If</Typography>

      <ComponentsGroup>
        <If condition>Exibe texto</If>
        <If condition={false}>Não exibe texto</If>
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography variant="h3">LoadingIndicator</Typography>

      <ComponentsGroup>
        <LoadingIndicator />
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography variant="h3">Paper</Typography>

      <ComponentsGroup>
        <Paper>Texto</Paper>
      </ComponentsGroup>
    </WrapperComponent>

    <WrapperComponent>
      <Typography>Select</Typography>
      <ComponentsGroup>
        <Select onChange={handleChangeSelect} values={selectValues} />
        <Select
          selectedValue={[selectValues[0].value.toString()]}
          onChange={handleChangeSelect}
          values={selectValues}
        />
        <Select
          error="Erro"
          onChange={handleChangeSelect}
          values={selectValues}
        />
        <Select
          label="Label"
          onChange={handleChangeSelect}
          values={selectValues}
        />
        <Select
          label="Label"
          error="Erro"
          onChange={handleChangeSelect}
          values={selectValues}
        />
      </ComponentsGroup>
    </WrapperComponent>
  </SceneWrapper>
);

export default memo(Demo);
