export const nativeAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

export const IsNative = (address) =>
    address.toLowerCase() === nativeAddress.toLowerCase();
