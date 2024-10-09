export const shortenAddress = (address) => `${address?.slice(0,6)}....${address?.slice(address.length - 4)}`;

export const parseErrorMsg = (err) => {
    const json = JSON.parse(JSON.stringify(err));
    return json.reason || json?.error?.message;
}