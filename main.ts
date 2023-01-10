enum LeadingZeroEnum {
    //% block="Yes"
    True,
    //% block="No"
    False
}

/**
* Custom blocks
*/
//% weight=100 color=#0fbc11 icon=""
namespace SmallDigits {
    function DisplayDigit(Digit: number, Offset: number): void {
        if (Digit != 1) {
            led.plot(0 + Offset, 0)
        }
        if (Digit != 2 && Digit != 3 && Digit != 7) {
            led.plot(0 + Offset, 1)
        }
        if (Digit == 0 || Digit == 2 || Digit == 3 || Digit == 4 || Digit == 5 || Digit == 6) {
            led.plot(0 + Offset, 2)
        }
        if (Digit == 0 || Digit == 2 || Digit == 6 || Digit == 8) {
            led.plot(0 + Offset, 3)
        }
        if (Digit == 0 || Digit == 2 || Digit == 3 || Digit == 5 || Digit == 6 || Digit == 8) {
            led.plot(0 + Offset, 4)
        }
        if (Digit != 4 && Digit != 6) {
            led.plot(1 + Offset, 0)
        }
        if (Digit != 4 && Digit != 5 && Digit != 6) {
            led.plot(1 + Offset, 1)
        }
        led.plot(1 + Offset, 2)
        if (Digit != 2) {
            led.plot(1 + Offset, 3)
        }
        led.plot(1 + Offset, 4)
    }

    /**
     * Function for displaying numbers from 0-99 without scroll
     * @param n Number to display
     * @param LeadingZero Give (0-9) a leading zero
     */
    //% block
    export function DisplayNumber(n: number, LeadingZero: LeadingZeroEnum): void {
        if ((n > 99) || (n < 0)) {
            basic.showNumber(n)
        } else {
            basic.clearScreen()
            if ((n > 9) || (LeadingZero = 1)) {
                DisplayDigit(Math.trunc(n / 10), 0)
            }
            DisplayDigit(n % 10, 3)
        }
    }
}