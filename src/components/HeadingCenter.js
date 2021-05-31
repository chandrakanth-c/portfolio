import './HeadingCenter.css';

function HeadingCenter(props){
    return(
        <div className="block-heading">
            <div className="heading-center">
                <h3 className="heading-text">{props.text}</h3>
            </div>
        </div>
    )
}

export default HeadingCenter;