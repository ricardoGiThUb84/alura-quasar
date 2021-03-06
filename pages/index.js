// function GlobalStyle() {
//   return (
//     <style global jsx>{`
//       * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         list-style: none;
//       }
//       body {
//         font-family: "Open Sans", sans-serif;
//       }
//       /* App fit Height */
//       html,
//       body,
//       #__next {
//         min-height: 100vh;
//         display: flex;
//         flex: 1;
//       }
//       #__next {
//         flex: 1;
//       }
//       #__next > * {
//         flex: 1;
//       }
//       /* ./App fit Height */
//     `}</style>
//   );
// }

// function Titulo(props) {
//   const Tag = props.tag;
//   return (
//     <>
//       <h1>{props.children}</h1>
//       <style jsx>{`
//         ${Tag} {
//           color: red;
//           font-size: 40px;
//         }
//       `}</style>
//     </>
//   );
// }

// function HomePage() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Titulo tag="h1">Welcome back Mr Js!</Titulo>
//       <h2>Alura Matrix</h2>
//     </div>
//   );
// }

// export default HomePage;

//codigo alura
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import React from "react";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const [userName, setUserName] = React.useState("ricardoGiThUb84");
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://images4.alphacoders.com/167/167738.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formul??rio */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();

              roteamento.push("/chat");
              console.log("form submetido");
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={userName}
              onChange={function (event) {
                const valor = event.target.value;
                setUserName(valor);
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[700],
                mainColorStrong: appConfig.theme.colors.primary[200],
              }}
            />
          </Box>
          {/* Formul??rio */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${userName}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {userName}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
