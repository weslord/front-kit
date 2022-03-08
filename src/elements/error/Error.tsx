import './Error.scss'

export const Error = ({ error }: { error?: Error }) => {
    return (
        <div className='Error'>
            <h1>An error has occurred</h1>
            <p>Sorry about that!</p>
            <p>
                You can email{' '}
                <span className='contact'>___CONTACT_EMAIL___</span> if you have
                any questions, or if you have information that can help us
                diagnose the problem.
            </p>
            <div className='next-steps'>
                <a
                    href={window.location.href}
                    onClick={() => window.location.reload()}
                >
                    Reload this page
                </a>
                <a href='/'>Main menu</a>
            </div>

            {error && (
                <pre>
                    {error.name}
                    {':\n'}
                    {error.message}
                </pre>
            )}
        </div>
    )
}
