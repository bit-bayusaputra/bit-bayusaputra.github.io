const dateFooter = () => {
    const dates = new Date().getFullYear()
    console.log(dates)
    document.querySelector('#date').innerHTML = `created at ${dates}`
}

const showAlert = () => {
    const dates = new Date().getFullYear()
    alert(dates, null)
}