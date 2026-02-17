import { SListItem, SSideNavWrapper, SUnorderedList } from "./styles";
import { Links } from "../../data/links";

export const SideNav = () => {
  return (
    <SSideNavWrapper>
      <SUnorderedList>
        {Links.map((link) => (
          <SListItem key={link.id}>
            <a href={link.to}>{link.name}</a>
          </SListItem>
        ))}
      </SUnorderedList>
    </SSideNavWrapper>
  );
};
