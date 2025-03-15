import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const App = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        header logo
      </AppShell.Header>
      <AppShell.Navbar>navbar list</AppShell.Navbar>
      <AppShell.Main>main content area</AppShell.Main>
    </AppShell>
  );
};
