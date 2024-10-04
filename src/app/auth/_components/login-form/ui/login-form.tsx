import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";

type LoginFormProps = {
  className?: string;
};

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  return (
    <Card
      className={cn(
        "bg-white max-w-[500px] mx-auto w-full",
        className
      )}
    >
      <Typography variant={"h4"} className="mb-4">
        Авторизация
      </Typography>
      <form className="flex flex-col gap-4">
        <Input label="Логин" placeholder="Логин" />
        <Input
          type="password"
          label="Пароль"
          placeholder="Пароль"
        />
        <Button>Авторизоваться</Button>
      </form>
    </Card>
  );
};
