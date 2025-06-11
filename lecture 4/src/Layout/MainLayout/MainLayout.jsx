const MainLayout =(props)=>{
    return(
        <>
        <Header></Header>
        <main>
<div>{props.children}</div>
        </main>
        <Footer></Footer>
        </>
    )
}
export default MainLayout;