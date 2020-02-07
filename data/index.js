async function recupereQuestions(succes, id){
    const req = await fetch(`../data/qz${1}.json`);
    if (req.ok){
        const qz = await req.json();
        return qz.questions;
    }
    else throw new Error(req.status);
}