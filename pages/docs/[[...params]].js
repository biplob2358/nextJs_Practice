import { useRouter } from "next/router";

function Documet() {
    const router = useRouter();
    const params = router.query.params || [];
    console.log(params)

    if (params.length == 2) {
        return (
            <h2>This page for {params[0]} and {params[1]}</h2>
        )
    }

    if (params.length == 1) {
        return (
            <h2>This page for {params[0]} </h2>
        )
    }
    return (
        <div>
            <h1>Docment home page</h1>
        </div>
    )
}
export default Documet;