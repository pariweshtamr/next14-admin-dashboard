type MenuLinkType = {
  item: {
    title: string
    path: string
    icon: React.ReactNode
  }
}

type SearchProps = {
  placeholder: string
}

type addUserFormData = {
  username: string
  email: string
  password: string
  phone: string
  address: string
  isAdmin: string
  isActive: string
}

type deleUserData = {
  _id: string
}
