export const createQueryString = (name, value, searchParams) => {

    const params = new URLSearchParams(searchParams)

    if(name && value) params.set(name, value)

    return params.toString()
}