function MainContent({ img, title, paragraph }) {
    return (
        <div className="grid grid-cols-4">
            <img src={ img } alt={ title }/>
            <h2>{ title }</h2>
            <p>{ paragraph }</p>
        </div>
    );
}

export default MainContent;
