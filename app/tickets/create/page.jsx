import CreateForm from './CreateForm'

export default async function CreateTicket() {
    return (
        <main>
            <h2 className="text-center">Create a New Note</h2>
            <CreateForm />
        </main>
    )
}