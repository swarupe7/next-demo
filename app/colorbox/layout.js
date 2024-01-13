export default function ColorBoxLayout({children,left,right}){
    return (
        <section>
            {left}
            {children}
            {right}
        </section>
    )
}