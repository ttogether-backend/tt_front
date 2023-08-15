import { rest } from "msw"

export const handlers = [
	rest.get('/', async (req, res, ctx) => {
    // req 는 '요청'에 관한 역할을 처리
    // res 는 응답을 리턴할 때 쓰이는 함수
    // ctx 는 실제로 응답을 어떻게 처리할지 세세한 내용을 정함
      
		return res(
      //비동기 로직처럼 하기 위해 ctx.delay를 사용할 수도 있음 ex) ctx.delay(1000)
        	ctx.json({
              message: "Welcome to TT",
            })
        )
	}),

  
]
