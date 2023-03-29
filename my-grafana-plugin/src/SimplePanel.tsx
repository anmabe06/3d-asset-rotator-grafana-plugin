import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  return (
    <h1>Hi</h1>
  )
};

// https://github.com/anmabe06/3d-asset-rotator-grafana-plugin/archive/refs/heads/master.zip
