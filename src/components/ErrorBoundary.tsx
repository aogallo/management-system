import { Component, ReactNode } from 'react'

export interface ErrorBundaryProps {
  children: ReactNode
}
export interface ErrorBundaryState {
  error: any
}

export class ErrorBundary extends Component<
  ErrorBundaryProps,
  ErrorBundaryState
> {
  constructor(props: ErrorBundaryProps) {
    super(props)
    this.state = { error: null }
  }
}
