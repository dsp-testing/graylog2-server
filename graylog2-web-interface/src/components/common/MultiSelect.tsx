/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
import React from 'react';

import Select from 'components/common/Select';
import type { Props as SelectProps } from 'components/common/Select';

type Props = SelectProps<string>;

/**
 * Component that wraps and render a `Select` where multiple options can be selected. It passes all
 * props to the underlying `Select` component, so please look there to find more information about them.
 */
const MultiSelect = ({ onChange, ...rest }: Props) => {
  const _extractOptionValue = (option) => {
    const { valueKey, delimiter } = rest;

    if (option) {
      return Array.isArray(option) ? option.map((i) => i[valueKey]).join(delimiter) : option[valueKey || ''];
    }

    return '';
  };

  const _onChange = (option) => onChange(_extractOptionValue(option));

  return <Select multi onChange={_onChange} {...rest} />;
};

MultiSelect.propTypes = Select.propTypes;

export default MultiSelect;
