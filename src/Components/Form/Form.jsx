export default function Form({ onSubmit }) {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({name, email})
    }
    return (
        <form onSubmit={safeSubmit} className="h-full w-full px-5 pt-52 flex flex-col items-center gap-10">
            <input type="text" className="alura-input" required placeholder="Informe seu nome"/>
            <input type="email" className="alura-input" required placeholder="Informe seu email"/>
            <button type="submit" className="alura-button">Confirmar</button>
        </form>
    )
}
