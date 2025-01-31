import { 
    SectionContainer,
    Title,
    Limitator,
    SubTitle,
    MajorSeparator,
    MinorSeparator
} from "./styles";


export const Section = () => {
    return (
        <SectionContainer>
            <Limitator>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                <MajorSeparator>
                    <MinorSeparator />
                    <MinorSeparator />
                    <MinorSeparator />
                    <MinorSeparator />
                </MajorSeparator>
            </Limitator>
        </SectionContainer>
    )
};