import { NextIntlClientProvider, useMessages, useTimeZone } from "next-intl";
import { FC, PropsWithChildren } from "react";

export const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
  const messages = useMessages();
  const timezone = useTimeZone();

  return (
    <NextIntlClientProvider messages={messages} timeZone={timezone}>
      {children}
    </NextIntlClientProvider>
  );
};
