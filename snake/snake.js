/**
 * Created by xchou on 7/29/15.
 */
function createSnake() {
    this.m_nCount = 0;
    this.m_nTime = 0;
    this.m_nDirect = 1;
    this.m_nGameStatus = 0;
    this.m_pAim = new createPoint(100, 100);
    this.m_aBody = null;



    this.ReDisplay = function (x, y) {
        canvasContext.clearRect(x - 1, y - 1, 7, 7);
    }



    this.IniAim = function () {
        var uX, uY;
        while (1) {
            uX = Math.round(Math.random() * 295);
            if (uX % 10 > 5) {
                uX = uX - uX % 10 + 5;
            }
            else if (uX % 10 < 5)
                uX -= uX % 10;
            uY = Math.round(Math.random() * 145);
            if (uY % 10 > 5) {
                uY = uY - uY % 10 + 5;
            }
            else if (uY % 10 < 5)
                uY -= uY % 10;

            var uTag = 0;

            for (var i = 0; i < this.m_nCount + 2; i++) {
                if (this.m_aBody[i].x == uX || this.m_aBody[i].y == uY) {
                    uTag = 1;
                    break;
                }
            }
            if (uTag == 0) {
                break;
            }
        }
        this.m_pAim.x = uX;
        this.m_pAim.y = uY;
    }

    this.IniGame = function () {
        this.m_aBody = null;
        this.m_nCount = 0;
        this.m_nTime = 0;
        this.m_nDirect = 1;
        this.m_nGameStatus = 0;
        this.m_pAim = new createPoint(100, 100);
        this.m_aBody = new Array();
        this.m_aBody[0] = new createPoint(20, 10);
        this.m_aBody[1] = new createPoint(15, 10);
        this.m_aBody[2] = new createPoint(10, 10);
        this.IniAim();
    }

}