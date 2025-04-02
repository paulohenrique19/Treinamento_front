import tw from "tailwind-styled-components";

export const Container = tw.div`
    p-8
`;

export const ContainerChild = tw.div`
    w-[350px] flex flex-col justify-center gap-6
`;

export const FormHeader = tw.div`
    flex flex-col gap-2 text-center
`;

export const FormContent = tw.form`
    space-y-4
`;
export const InputContainer = tw.div`
    space-y-2
`;

export const Title = tw.h1`
    text-2xl font-semibold tracking-tight
`;

export const Description = tw.p`
    text-sm text-muted-foreground
`;
