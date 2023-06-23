import Header from "@components/Header";
import { Container, Content, DoubleCard, Title} from "./styles";
import { useTheme } from "styled-components/native";
import StatisticsCard from "@components/EstatisticasCard";
export default function Statistics() {
  const percentage = 50.54;

  const { COLORS } = useTheme();

  const colorBG = percentage > 50 ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT;
  return (
    <>
      <Container colorBG={colorBG}>
        <Header percentage={percentage} />
      </Container>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard
          quantity={22}
          subtitle="melhor sequência de pratos dentro da dieta"
          typeCard="NEUTRAL"
        />
        <StatisticsCard
          quantity={109}
          subtitle="refeições registradas"
          typeCard="NEUTRAL"
        />
        <DoubleCard>
          <StatisticsCard
            quantity={99}
            subtitle="refeições dentro da dieta"
            typeCard="POSITIVE"
          />
          <StatisticsCard
            quantity={10}
            subtitle="refeições fora da dieta"
            typeCard="NEGATIVE"
          />
        </DoubleCard>
      </Content>
    </>
  );
}
