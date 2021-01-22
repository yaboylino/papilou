import React, { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const ApplePay = () => {
  const router = useRouter()
  const klantgegevens = useSelector(state => state.mand.klantgegevens)

  const [gegevens, setGegevens] = useState({
    voornaam: klantgegevens.voornaam,
    achternaam: klantgegevens.achternaam,
    straatnaam: klantgegevens.straatnaam,
    huisnummer: klantgegevens.huisnummer,
    plaats: klantgegevens.plaats,
    provincie: klantgegevens.provincie,
    postcode: klantgegevens.postcode,
    telefoon: klantgegevens.telefoon,
    land: klantgegevens.land,
    email: klantgegevens.email,
    totaal: klantgegevens.totaal,
    artikelen: klantgegevens.artikelen,
    method: "applepay"
  })
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("/api/betaling/", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: gegevens
      })
      .then(response => {
        console.log(response.data)
        if (response.data._links.checkout.href) {
          router.push(response.data._links.checkout.href)
        }
      })
  }
  return (
    <svg onClick={e => handleSubmit(e)} className="w-full h-full" viewBox="0 0 32 32">
      <g fill="none" fill-rule="evenodd">
        <rect width="31" height="31" x="0.5" y="0.5" fill="#FFF" stroke="#333" rx="8"></rect>
        <path fill="#000" fill-rule="nonzero" d="M8.34216393 12.7568096C8.61266031 12.4184964 8.79621694 11.964212 8.74781212 11.5 8.35184104 11.5197012 7.86866031 11.7612241 7.58891092 12.0998265 7.33773019 12.3897735 7.1154073 12.8630651 7.17335429 13.3078265 7.61784586 13.3463807 8.0619326 13.0856578 8.34216393 12.7568096M8.74276152 13.3946699C8.09724827 13.356212 7.54842899 13.761012 7.24014947 13.761012 6.93173501 13.761012 6.45967718 13.4140434 5.94912297 13.4233928 5.28460248 13.433147 4.6680049 13.8088771 4.33077116 14.4064482 3.6371808 15.6019181 4.14773502 17.3752 4.82222176 18.3488289 5.14977839 18.8305253 5.54451574 19.3608964 6.06466995 19.3418313 6.55612056 19.3225542 6.74873742 19.0236241 7.34611574 19.0236241 7.94305068 19.0236241 8.11656393 19.3418313 8.63679525 19.3321928 9.17628441 19.3225542 9.5135567 18.8502651 9.84111333 18.3681253 10.2168627 17.8190169 10.3706748 17.2888193 10.3803519 17.2597108 10.3706748 17.2500723 9.340082 16.8546988 9.33052056 15.6691759 9.32078562 14.6765205 10.1396579 14.2043663 10.1781928 14.1750843 9.71577357 13.4911518 8.99324827 13.4140434 8.74276152 13.3946699M14.7108819 12C16.1138698 12 17.0909108 12.967094 17.0909108 14.3751132 17.0909108 15.7881638 16.0938602 16.7603277 14.6757976 16.7603277L13.1224096 16.7603277 13.1224096 19.2305349 12 19.2305349 12 12 14.7108819 12zM13.1224096 15.8182168L14.4101976 15.8182168C15.3873349 15.8182168 15.9434602 15.2921446 15.9434602 14.3801446 15.9434602 13.468241 15.3873349 12.9470843 14.4152096 12.9470843L13.1224096 12.9470843 13.1224096 15.8182168zM17.3693686 17.7324337C17.3693686 16.805359 18.0758939 16.2742168 19.3786409 16.1941012L20.7766168 16.1088385 20.7766168 15.7080289C20.7766168 15.1217542 20.3907855 14.8010602 19.7043662 14.8010602 19.1380819 14.8010602 18.7272096 15.0916819 18.6420626 15.5376385L17.6298409 15.5376385C17.6599903 14.6005976 18.5418409 13.9192096 19.7344192 13.9192096 21.0171759 13.9192096 21.8539759 14.5906506 21.8539759 15.6328289L21.8539759 19.2305349 20.8167132 19.2305349 20.8167132 18.363759 20.7916915 18.363759C20.4960385 18.929947 19.8446072 19.2856289 19.1380819 19.2856289 18.0958843 19.2856289 17.3693686 18.664347 17.3693686 17.7324337zM20.7766168 17.2663903L20.7766168 16.860453 19.5289445 16.940665C18.8274506 16.9857156 18.4617253 17.2462843 18.4617253 17.7022843 18.4617253 18.1432096 18.8425253 18.4289156 19.4387662 18.4289156 20.2003662 18.4289156 20.7766168 17.942747 20.7766168 17.2663903zM22.8075373 21.1647229L22.8075373 20.297947C22.877706 20.3078168 23.0480192 20.3178602 23.1381783 20.3178602 23.6342939 20.3178602 23.9148723 20.107547 24.0852819 19.5663036L24.1855036 19.2456096 22.2864 13.984347 23.4588723 13.984347 24.7817445 18.2533976 24.8067662 18.2533976 26.1296385 13.984347 27.2721542 13.984347 25.3028819 19.5112096C24.8519132 20.7788915 24.3357879 21.1948723 23.2434313 21.1948723 23.1582843 21.1948723 22.8826409 21.1848289 22.8075373 21.1647229z"></path>
      </g>
    </svg>
  )
}

export default ApplePay