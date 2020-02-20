export async function getQuizAjax(idQuiz){
    const res = await fetch(`quiz${idQuiz}.json`);
    if (res.ok){
        const json = await res.json();
        return json;
    }
    else throw new Error(res.status);
}