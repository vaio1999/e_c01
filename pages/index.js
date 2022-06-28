import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Spacer } from "@nextui-org/react";
import { Container, Row, Col } from "@nextui-org/react";
import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        showSkeleton
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://t3.ftcdn.net/jpg/03/47/91/18/360_F_347911899_lGRCgiWEGRzdJRVwWLWYThcV1B9eRQx2.jpg"
        alt="Default Image"
      />
      <Card
        css={{
          p: "$16",
          mw: "800px",
          Height: "400px",
          backgroundColor: "#FFFFFF",
          opacity: 0.7,
          textAlign: "center",
          mt: "50px",
          ml: "600px",
        }}
      >
        <Container gap={0}>
          <Row>
            <Col>
              <img
                alt="nextui logo"
                src="https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/288157635_570895784381597_8516913655513108986_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BThrbX_1nBsAX_CeFdt&_nc_ht=scontent.fhan1-1.fna&oh=00_AT-CVL7F_bnmKSSTIXr6sAp7_5Vkw5nmCYlSaUVzo7iSzQ&oe=62BF5535"
                width="200px"
                height="300px"
              />
            </Col>

            <Col>
              <Row>
                <Grid.Container css={{ pl: "$20" }}>
                  <Grid xs={18}>
                    <Text h3 css={{ lineHeight: "$xs" }}>
                      EWUART DOAN
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Link href="https://www.ewuart.tk">
                    <Text css={{ color: "$accents8" }}>ewuart.cf</Text>
                    </Link>
                  </Grid>
                  <Spacer y={2} />
                </Grid.Container>
              </Row>
              <Row>
                <Card.Body css={{ py: "$1" }}>
                  <Text>
                    Ngoài là một IT, tôi còn là một người viết truyện. Từ những
                    gì tôi gặp, tôi nghe, tôi thấy, gói gọn chúng vào những câu
                    chữ nhỏ nhắn, mốc mạc. Đem đến cho mọi người nhiều khia cạnh
                    khác nhau trong cuộc sống.Mong rằng sau này ... Dù mọi người
                    có đi xa đến đâu, khi ngoảnh lại vẫn sẽ thấy. Bàn ghế, chai
                    lọ, những chiếc ly, khăn trải bàn sờn chỉ. Hôm nay, quán vẫn
                    còn bàn, tôi có rượu rồi, bạn có chuyện chưa ?
                  </Text>
                </Card.Body>
              </Row>
              <Spacer y={1} />
              <Row>
                <Card.Footer>
                  <Col>
                    <Button color="" auto bordered>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAy0lEQVRIS2NkoDFgpLH5DIPOAgGgj+uB2AGIFYD4AxBvAOJCXCFBig9Aht8HYhCNDEAWBFLDgn6gIQVYDKKaBeuBhgdALTgAdTUoiPACUoIIFDygcAeBCfjCHdlGci0ARSrIEoKAkAUOSK4GpR6YDxYA2Qehpl8A0iCMFRCyYD5QVwIBZ+INLmpYAEqioJRElg9AyTIeqtMAyYQHQDYsBYHi4wC5FiDrQ05FVIvkUQtIKq5H44BgsULzICLoAmwKCBUVZBmKrInmFgAAW38qGVU0eQAAAAAASUVORK5CYII="/>
                      <Link
                        color=""
                        href="https://www.facebook.com/profile.php?id=100043835406179"
                      >
                        Facebook
                      </Link>
                    </Button>
                  </Col>
                  <Spacer x={0.3} />
                  <Col>
                    <Button color="" auto bordered>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABxElEQVRIS8WVfVEDQQzFWwWAg+IAHBQFgAKKAkABRQGggEMBOOihAFBAHYADeL+b5Gab2b2PP27IzJvd7iV5+dhs57OJZT6x/9m/ERwpszPhVFgkWe4n+x/b11q3wqOtO0XJZXAtjVvTwhC4s1hRCAmAgJBLoUqVIgHK7+b0PBdRZLDfENwLS+FY+HC9SLDWhyvhJFUqOOWYDJ6EN4v8W+urQHCNRIIXnZEFUUQhOoDUBghwSsTYfAmcHZQIUMCYWrpASPo0PRWckikO6REgm5XQBh4z8BRTArLC+YPwbI74DSnBQOLiBGTQXIwcQaXzG7PAEQQ49zN3xm2DJL05vQS/wZk7OdT5NomUrdf/Tvu1fRtNQISQdBGk2fUSxB54idIoY4m4klxNZDQBRgweg0QP6A/iTaZsNNknfdAtqmXQDor2C4FG+3PgGXBN47T3EmxkRPNyg7Yysj2tnwJl8cidlDnirLWP15Sm4ggF0h8jZApBJbRzlHvs0mkeSuJvEr2hJ7VHlnuuyYBaIl6GWAq3xzG9IXqE6HcGsvSPhtGFsDQH7jC30mwy5Rnx69rqlQiiIyItSSm7Rn8oQVcGnd8mJ/gDAK1yGX6mKdEAAAAASUVORK5CYII="/>
                      <Link
                        color=""
                        href="https://www.instagram.com/ewuart_doan/"
                      >
                        Instagram
                      </Link>
                    </Button>
                  </Col>
                  <Spacer x={0.3} />
                  <Col>
                    <Button color="" auto bordered>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABD0lEQVRIS+1VURHCMAzdHIADJCBhFnAwFAAKAAXgAByAAyYBByABB/AeNHchl63brftb7nLd2ua95iW95tnAlg+Mn40EUYW1RAV2X+AT+AZ+jEb/byjxuwrxS4wVlzXBA/8zFXPF96IFCQ+0ha/V3he+p5bg7YDdMcfTcPRsjskTnKO17+F1Bh6BBHmSlVg8wJmBZ50ICHAO2XiSJCEgiEjlSdJLohoVGqejErGLigaNBZ0dw8y4V1uUgPdgD+fdsMECVIW6lBjZqp0J2D20nQMgB2AG3nqrDISAJCzsLRDyblBCsSQEBGOL0p9GjmQEBjd9Br0IbJosoq5BHbhtAhad9WGdxhetSbXf2uCP/genKjgZbgJbUQAAAABJRU5ErkJggg=="/>
                      <Link

                        color=""
                        href="mailto: ewuart0020@gmail.com"
                      >
                        Gmail
                      </Link>
                    </Button>
                  </Col>
                  <Spacer x={0.3} />
                  <Col>
                    <Button color="" auto bordered>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVRIS7WVDVEDMRCFWwfgoDgABYADcFAUAAooCsABdQAOOBQACqgDcADv6+zr7KUJdzDTzOykuSTvZzdJp5Mdt+mO8Sf/JfiQsDfFe/RPLaE1gj0tflDQnyu+Kpu/i29Lja9ra0sCg58FACpPKxtn+nYYcRliEIKgLpNnggwOMA2QFolx2HenmIeQI/UrT2aChT7eBKBT89wgcQ1eNH8fYI/qcY4DXK9bJmDTTIECO0BdJmGOlmvAWr6z9jUwELgufCZgkpSUBBS8VIYQ1vowUGCcXClI161iURKg9ESBvS6UAjBXoBJVq/juDmJSYxceo571PQcwo8BqmLerjeWCgLR8KjhB+4py3CMwuxeDZVIrLPCHh+U9QA0qDiIdVgRSy8WvLCXBQqs5qpscJhfkn+ItA9H3hr5147feonzUcrFdC7C7qBNCSCuNFNZufPWxm2sxp4dasMl3wvXIKfEcR7ZK0npNfStJCyT0NIBQzfsD4EUIad345nNNqrwJJ1uPWLah33l978QN/R/YCXgUnjtiN5nDBcddF67X80MErOHykX83AHjk6CHDoZ8T1Pdu/BgCA9eKnF1sgY91kEH4TRqOFRR8piA9LjiOeu0vDsq9o8Y7J/gBVdCAGQWbZcIAAAAASUVORK5CYII="/>
                      <Link
                        color=""
                       href="tel:0345920543" title="Gọi 0345920543" onclick="_gaq.push(['_trackEvent', 'Contact', 'Call Now Button', 'Phone']);" id="floating-phone"
                      >
                      Tel         
                      </Link>
                    </Button>
                  </Col>
                </Card.Footer>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
