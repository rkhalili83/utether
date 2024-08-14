import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { ColorType } from '../Libs/LightweightChart/types';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles

  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"( $ دلار)قیمت لحظه ای تتر "} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>


        <div style={{width:"100", height:50, backgroundColor:"#99ADC8",margin:10,
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
           قیمت لحظه ای : {(props.p.price as number).toLocaleString("fa-IR")}
        </div>

        <br-xxxxx/>
        

        <div style={{width:"100", height:50, backgroundColor:"#99ADC8",margin:10, color:"red",
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
        <span style={{color:"black"}}>
        تغییرات 24 ساعت :
        </span>    % {(Number(props.p.diff24d) as number).toLocaleString("fa-IR")} 
        </div>

        <br-xxxxx/>
        

        <div style={{width:"100", height:50, backgroundColor:"#99ADC8",margin:10, color:"forestgreen",
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
        <span style={{color:"black"}}>  
        تغییرات هفتگی : 
        </span>      % {(Number(props.p.diff7d) as number).toLocaleString("fa-IR")} 
        </div>


      
        <div style={{width:"100", height:50, backgroundColor:"#99ADC8",margin:10, color:"darkslateblue",
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
        <span style={{color:"black"}}>
        تغییرات ماهانه  :
        </span>     % {(Number(props.p.diff30d) as number).toLocaleString("fa-IR")}
        </div>
   
        <br-xxxx />
        <br-xxxx />
        <br-xxxx />
        <br-xxxx />
        <video autoPlay loop style={{float:"left", width:"28%" ,height:"10%", paddingRight:"5%", borderRadius:"25px" }}><source src='/IMG_4087.mp4' type='video/mp4'></source></video>
        <br-xxxx />
        <br-xxxx />

         <center>
        تهیه شده توسط تیم پژوهشی تیرا دو . خلیلی 
         </center>

      </Window> 


      <Window title={"price of tether(Dollar $)"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>

      <div style={{width:"100", height:50, backgroundColor:"#9B79B6",margin:10,
        textAlign:"center"
      }}>
        <br-x/>
        <br-x/>
        current price: {(props.p.price as number).toLocaleString("en-UK")}
      </div>


      <div style={{width:"100", height:50, backgroundColor:"#9B79B6",margin:10, color:"red",
        textAlign:"center"
      }}>
        <br-x/>
        <br-x/>
        <span style={{color:"black"}}>
        changes in last 24 h :
        </span>    % {(Number(props.p.diff24d) as number).toLocaleString("en-UK")}
       
      </div>

      
      <div style={{width:"100", height:50, backgroundColor:"#9B79B6",margin:10, color:"green",
        textAlign:"center"
      }}>
        <br-x/>
        <br-x/>
        <span style={{color:"black"}}>
        changes in last 7 days :
        </span>      % {(Number(props.p.diff7d) as number).toLocaleString("en-UK")} 

      </div>


      <div style={{width:"100", height:50, backgroundColor:"#9B79B6",margin:10,color:"blue",
        textAlign:"center"
      }}>
        <br-x/>
        <br-x/>
        <span style={{color:"black"}}>
        changes in last 30 days :
        </span>      % {(Number(props.p.diff30d) as number).toLocaleString("en-UK")}
       
      </div>


        <br-xxxx />
        <br-xxxx />
        <br-xxxx />
        <br-xxxx />

        <center>
          created by Tira.Dev studious team . KHALILI
        </center>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console.log("PRICEEEEEEEEEEE", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session:session,
        // nlangs,
      })
    },
  }
}