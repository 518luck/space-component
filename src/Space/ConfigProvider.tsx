import React from 'react'
import type { SizeType } from '.'

export interface ConfigContextType {
  space?: {
    size?: SizeType
  }
}

export const ConfigContext = React.createContext<ConfigContextType>({}) // eslint-disable-line

interface ConfigProviderProps
  extends React.PropsWithChildren<ConfigContextType> {
  space?: {
    size?: SizeType
  }
}

export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props
  return (
    <ConfigContext.Provider value={{ space }}>
      {children}
    </ConfigContext.Provider>
  )
}
