// catch all segment route

const Docs = ({ params }: {params: { slug: string[] }}) => {
    // if (params.slug.length === 1) {
    //     return (
    //         <h1>Viewing Docs for {params.slug[0]}</h1>
    //     )
    // } else if (params.slug.length == 2) {
    //     return (
    //         <h1>Viewing Docs for {params.slug[1]}</h1>
    //     )
    // }
    if (false) {
            <h1>Viewing Docs for {params.slug && params.slug[params.slug?.length-1]}</h1>
    }
    return (
        <div>
            <h1>Docs home page</h1>
            {/* {params.slug ? params.slug.map((item, index) => {
                return (
                <div className="params">
                    <h1>Views Docs for {params.slug[params.slug.length-1]}</h1>
                    <li key={index} style={{listStyle: 'none'}}>{item}</li>
                </div>
                )
            }) : <h1>No nesting</h1>} */}
            
        </div>
    );
};

export default Docs;