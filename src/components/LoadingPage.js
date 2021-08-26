import loadingSpinner from '../assets/Spinner-1s-200px.gif'
const LoadingPage = () => {
    return(
        <>
        <img alt="loading"
        src={loadingSpinner}
        style={{
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'margin': '8rem auto 0'             
        }}
         />
        </>
    )
};

export default LoadingPage;