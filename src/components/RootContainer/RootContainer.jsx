function RootContainer(props) {
    return (
        <div style={{
            width: '100%',
            maxWidth: '1120px',
            margin: '0 auto',
            backgroundColor: 'rgb(129, 200, 239)',
            height: '100%',
            display: 'grid',
            gridTemplateRows: '9% 91%'
        }}>
            {props.children}
        </div >
    )
}
export default RootContainer;