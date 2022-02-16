
type Componente = {
    new(...args: any[]): {
        render(): any
    }
}

export default function logRender<C extends Componente>(componente: C) {
    return class extends componente {
        render() {
            console.log('Renderizando componente')
            const r = super.render()
            console.log('Renderização concluida!')
            return r
        }
    }
}