import React from 'react'

type ErrorBoundaryProps = {
    path?: string
    children: React.ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Error logging would go here
    }

    componentDidUpdate(prevProps: ErrorBoundaryProps) {
        // Reset error on navigation
        if (this.state.hasError && this.props.path !== prevProps.path) {
            this.setState({ hasError: false })
        }
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return <div>An error has occurred.</div>
        }

        return this.props.children
    }
}

export { ErrorBoundary }
