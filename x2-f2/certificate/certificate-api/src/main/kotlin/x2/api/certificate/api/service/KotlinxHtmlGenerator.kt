package x2.api.certificate.api.service

import kotlinx.html.DIV
import kotlinx.html.TBODY
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.head
import kotlinx.html.html
import kotlinx.html.img
import kotlinx.html.p
import kotlinx.html.span
import kotlinx.html.stream.createHTML
import kotlinx.html.strong
import kotlinx.html.style
import kotlinx.html.table
import kotlinx.html.tbody
import kotlinx.html.td
import kotlinx.html.tr
import kotlinx.html.unsafe
import net.glxn.qrgen.javase.QRCode
import x2.api.certificate.api.model.CertificateCredentialsTranslation
import x2.api.certificate.api.model.CertificateDataTranslation
import x2.api.certificate.api.model.CertificateSignerTranslation
import x2.api.certificate.api.utils.withStyles
import java.util.Base64

object KotlinxHtmlGenerator {
	@Suppress("MaxLineLength")
	const val IMG_BASE64 =
		"iVBORw0KGgoAAAANSUhEUgAAAgIAAAHmCAYAAAABeObFAAAgAElEQVR4Ae2djbXbOJKFHcJm0BtChzAhOANvBnYGvRm4MxhnYGcwIXQIE8KG8PZce9APokiKP7hAAfhwjo4oigLBW4Wqi0IB+vBGAQEQAAEQAAEQmBaBD9M+OQ8OAiAAAiAAAiDwBhFACUAABEAABEBgYgQgAhMLn0cHARAAARAAAYgAOgACIAACIAACEyMAEZhY+Dw6CIAACIAACEAE0AEQAAEQAAEQmBgBiMDEwufRQQAEQAAEQAAigA6AAAiAAAiAwMQIQAQmFj6PDgIgAAIgAAIQAXQABCZF4N///vfbn3/++fY///M/b//4xz/+fn358uXt+/fvb//3f/83KTI8NgjMhQBEYC5587Qg8Pavf/3rp9P/8OHD297rv//7v9/+93//902EgQICIDAuAhCBcWXLk4HAAwIa4Wu0v+f8174TIfj27dtDXXwAARAYBwGIwDiy5ElAYBOBf/7zn2//9V//dZoE5MRAUwhEBzYh5gsQ6BYBiEC3oqPhIPAaATluzf/nDv3usaYLKCAAAuMgABEYR5Y8CQj8jYCmAeSw7zr9rd9rukAJhRQQAIH+EYAI9C9DngAEHhBQMqAc9ZYTL3me6YIH6PkAAl0iABHoUmw0GgSeEXBMAxwhDSIdWoZIAQEQ6BMBiECfcqPVIPCAgKYB7iYDHnH6e9eIEJBM+CAWPoBAFwhABLoQE40EgXUEak4D7JGA/DumC9ZlxVkQiIoARCCqZGgXCOwgoGRAOdzcAUc6VnSAvQd2BMhXIBAIAYhAIGHQFBA4goDm41tPAxwlHb///jvTBUeEyjUg0BABiEBD8Lk1CJxB4OjWwEeddM3rlMPAfxeckTbXgkA9BCAC9bDmTiBwCYGrWwPXdPRH7sV0wSXx8yMQsCMAEbBDzA1A4DoC2rRHDvSIo+3lGpIJr+sDvwQBBwIQAQeq1AkCNxFotSdATTLBVsU3lYSfg0AhBCAChYCkGhAogUDaGriXZMC7xEHRjr/++qsEdNQBAiBwEQGIwEXg+BkIlEYg4p4Adx390d8zXVBam6gPBI4jABE4jhVXgoAFAU0DfPz4cag8gKMEIL+OZEKLelEpCLxEACLwEiIuAAEfAj3tCZA7beexCAFbFft0jppBYIkARGCJCJ9BoAICmgbQZjtOh9p73V++fIEQVNBFbgECEAF0AAQqIjDKngC1SAbTBRWVk1tNiwBEYFrR8+C1EYg6DaAVCl+/fv05+o76/wXKoWC6oLbGcr9ZEIAIzCJpnrMZAloe949//CPkNIAc/3Lr33/+859hNzFi74FmasyNB0YAIjCwcHm0tgikPQFqhdHP3Echd+Up7JU//vgjJHlhumBPanwHAucRgAicx4xfgMBLBKLuCaBpADn4oyXy0kb2HjgqRa4DgX0EIAL7+PAtCJxCQI4z6jSA2nV1nj3qdIGIjXIvKCAAAtcRgAhcx45fgsADApq/jrg18JFpgIcH2fggEqElfWemIGpdq2e8SnI2HpfTIDANAhCBaUTNg7oQiDoNICesaYBlMuBdHORw5XhrOfkz92G64K50+f2MCEAEZpQ6z1wEATnYqMvtNA3g/jOfqNMFJBMWUW8qmQgBiMBEwj77qHJ0ciYa8WoUqFfp0eXZNkW5PvqeALVwkk5EJUPauVHto7wjQD9+x4KjdwQgAu9YcPT29tPpax74SOhX1+il0Wd6ySnopflyveQwNXL8/v37z7pFKkQueiUVar+e9Uy4uta1nz9/bkbUIk+PSA97JbDJcetdGOul/qSX+lbqZ6nf6T31xdQ/t/JWdF4bNX379g3bNzkCEIHJFSA9vgxNy3/AS0ZLo7hkyJJxEzFJBi8ZwWQU9Z6MZXoWx7scSdREOWEmHCKU2fceSLrocNxOQqn+ByGI0IPatAEi0Ab3UHfVCF2GwGloatatkU4iFolUiOSIWOSk4mi0QtGMrVFVzeda3ktt0tbA0YqcoLBetjfCZ7VL7UulV8ftwlL9gzIfAhCB+WT+8MQyhBGdnMvQjVJvD3vvK3ozEsEcRXdePYfIEmUuBCACc8n76Wkx1B9Cjly3jLXkFWUa4EmZVk5oSiXqdMEWxpz/wCZNK7o88imIwMjSffFsGrFh9PogAoraOPYEeKEixb5W5Em5DOhbP/qWT6EUUwQqCokARCCkWPyNUicnGtCHUVaewyhGmemCPnROhI0pAr8djnIHiEAUSVRuh7LwGZ3FNsoiakpUHK2I1ERNJqRPPPaJnqahRusnNZ8HIlAT7SD3kiHG4D0avGh4tNwToJaaEpWKrYPqE4pGUcZHACIwvoyfnpDRWFwDLMPr3hr4SSEan9ASSKap4uokUYHGHaTC7SECFUCOdAuiATENbtQ9AWrpLtMFMfWSqECtHtD2PhCBtvhXvzvRgHgGd4ZpgKOKrpwIogPxdJRdB49qcJ/XQQT6lNulVivEF20ufOb2RNoa+JJCGX/E3gOxyIDIWa//12BU02GqhggMI8rXD8JIK4ZxTXsCvJbY3FcwXRBDXxNZ10ojypgIQATGlOvTU7F5UAyjOtKeAE9KZjrB3gMxdFcElqiASckbVwsRaCyAWrcnGtDWmAp/sq+vaztbFbfVX6IC13W3h19CBHqQ0s02Eg1oa0R73hr4puoV/zl7D7TVZUUFJAPKWAhABMaS59PTYDjbGU6mAZ7UsdgJpgva6TVbDxdT4zAVQQTCiMLTELYSrm8wNWqSo6J4ESCZsL5upykCprm8ul27dohAbcQr3k+GMnVcx7scnqPenutkT4CKCv6fWxH1eiYE7r7J1sP19dx5R4iAE93Gdbs3D5IBTkXJXPqs7XE1WtBLm8NoZKwtZBWZ0OvLly8//3Dm48ePP/cxl0HRenol07mNl5Ng6DkYJSVtaPOuXIyedUh9QC/1B+mTXurDeqnfpD6kPqWX+pd0Tn1OfS/vj5KAOxqIvrfRc8ddIQIOVAPUKaPgdHzuecJk2GRs0isZwGQQ9Z4MZTKcek8G1fn8qW45HhEdSgwEpDfSiSQf57tkn3Qt6V/SR70nPU16q/eky0m/ncvxVLeTGOmZKWMgABEYQ45PT+E0hjJ+MmS9lJLRChlWjdg0QmNEFFcDpJ+SkZxV7gyT406jbkWmkvNOo24Ru+S8X4264yLwq2XuqABbD0fXgGPtgwgcw6mrq+SgnCMhhWApIAAC8REQCRb5cdkD1e2MasRHeIwWQgTGkOPDU7g7/sPN+AACIBAaAUU3XERA9SrqQOkbAYhA3/J7ar2706t+CgiAQF8IaIrERQY09UJUoC99WLYWIrBEpPPPRAM6FyDNBwEDAu7pQqICBqFVrBIiUBFs962IBrgRpn4Q6BcBd1SgpwTifqXoaTlEwINr9VrVCZ3RAJYKVRcpNwSBogi4owJafUHpEwGIQJ9ye2q1e5kQbP8Jck6AQHcIOJcVKweBJbXdqcTPBkME+pTbQ6vlpF2JQKoXpv8ANx9AoFsEZCvyfRVK2w0ih32qBkSgT7k9tNrN8okGPMDNBxDoGgF39JCoQH/qARHoT2YPLSYa8AAHH0AABF4goKV+RAVegDTZ1xCBzgXujAYo+ZBoQOcKQvNBYAUBd1SArYdXQA98CiIQWDivmubOAmYr4VcS4HsQ6BMBth7uU26uVkMEXMhWqNe5XFB1U0AABMZFwL3vCJsM9aM7EIF+ZPXQUncnZivhB7j5AAJDIuDeZIith/tQG4hAH3J6aiXRgCdIOAECIHASAff0IlGBkwJpdDlEoBHwd25LNOAOevwWBEAgR4CoQI7GnMcQgc7krix+ZzTg999/7wwRmgsCIHAHAXdUgA3J7kinzm8hAnVwLnYX97Kfv/76q1hbqQgEQKAPBJzLkLV7IXYlth5ABGLL56F1bB70AAcfQAAECiEg28ImQ4XA7LAaiEBHQnOzdjYP6kgZaCoIFEbAHW1k6+HCAitYHUSgIJjOqogGONGlbhAAAbYenlcHIAKdyN4ZDVBIkGhAJ4pAM0HAiIA7KvD9+3dj66n6KgIQgavIVfydO6uXrYQrCpNbgUBgBGpsPRz48adtGkSgA9E7lwuqbnb/6kAJaCIIVELAvU8JmwxVEuSJ20AEToDV4lJ3p2Qr4RZS5Z4gEBsBNhmKLZ/SrYMIlEa0cH3uaEDh5lIdCIDAAAi4pyOJCsRSEohALHk8tIZowAMcfAABEKiIAFGBimA3vhVEoLEAtm6vLH5nNICthLeQ5zwIgIAQcEcF2Ho4jp5BBOLI4qEl7mU8bPn5ADcfQAAEVhBwLltm6+EVwBudggg0An7vtmwetIcO34EACNRCQLaIrYdrod3uPhCBdthv3tnNwtk8aBN6vgABEFgg4I5OsvXwAvAGHyECDUDfuyXRgD10+A4EQKA2Amw9XBvx+veDCNTHfPeORAN24eFLEACBBgi4owJsPdxAqNktIQIZGK0P3Vm6bCXcWsLcHwT6RMAdFdAKKUo7BCAC7bB/uLMYsXO5oOomN+ABcj6AAAicQMC9r8nHjx+xUSfkUfJSiEBJNE/WJZb9559/WgmAlujoxVbCJ4XT+eUifXopyqSX5J9eCvOeeUlH029FWFOdqp//qehcUU42X/uPJJvietf0KIOWk4K5eTlE4CaAV34u4ylD7FyWk3dSwm5XpBTzN9IdGUk5ZDnoL1++vMlwahc4ybmWTuX6pWPdW23QS22Sfos8iDRg1GPq0pVWSZ5L2bs+S691P4ofAYiAH+O/71CbAKQOKoNM6QuB3NnLIGokJmebZNrju54hEQWRGBl5Igp96aVaKxnW1D/d79u3b/0B1VGLIQIVhCWjrlFSi9Ea0YAKAr55C+3yKLImHZGzbKEnNQ378l4pmqAogiIdRBBuKpT55zWjArmuSE8gBB7hQgQ8uP6sVR2mNnvOO46OCa0ZBXyhajm5mZ3+Uj+3PosMKXksRQ4uQM1PjAhINluyc5+HEJQXLESgPKY/nW9rAqDOqJAypS0CyfFLFjJgbiM5cv3qU4qaMKXQVqd1d+l1a11TfxJRJIJ0Xx8gAvcx/LuGCBGAvHPSQf4WTbUDzXkrvC2HheP/tWIl18mSxyIGcgT8gVY19X64kaZySsrzal3qZyLa2LsH8Zz6ABE4Bdf6xQr11lhWc6ajEA1Yl5XjrAyQHFKEKNAZHRnp2uQMRMJIQHRo+XOdwjlaPguE4FlOR85ABI6gtHKNOkHNJYBnjTbseEVoBU8p+iP5M+r3jvrP6n26XnPYSiyjHxRU+pWqokQFktzTO4RgRVg7pyACO+CsfRWdAKgjsJXwmuTun8P5x3T6yfhvvStSAym4r/9rNUSMCuR6INmr31L2EYAI7OPz97c9EAB1AI1QGQX9LbbbB0nuhP37JAG5U9CxIgWaPqCUQ+Dr168hcgWWss4/yy6y9HBb5hCBbWx+fqNEJIWZcqWKfMzmQS8EeuBrOX85C5z/GM5/rb+mnAJI84EOceCSaDlSazLXOQjBujAhAuu4hFkCuKXQa+c12qFcR0CkL3Lex5rMOXefrMiJMVq83m/0S/WdaImDe30jEQKRfsrbG0RgoQXRlgDuKXP+nYwZSr0Q5sGPvco8lz/H9wkBUYKDHWbjst7IgPqMZC7yP3tkCCLwH6XuORT8+fPnja7J6S0E0tx/T6MYnP19Z38UQ5LMtnrO/nk5VDnXozhHum7mlQZTEwE5A63/7llxxcIpxxGAANRzppGM/NW2yDYwbXC8f6UrlavUs12dLUIwJRHo2RloBKvlgbMpajIwV98V/u8p6fOq4+J3HqIDIbjW80QIek26lb2YZenhVERgBAKgZ6AcR4D5f49jnJVwiBAwp3y8/6Ur1Q9b/lHRHX0VkRl9yekURECj51Z/A3xHAfXbFAGAACSTcuwdAgABuNv39n6fCMExbeSqhIBsca+RuZGjQkMTgZ5ZqJROG3VAAJIJOfbes6HZczx8F5PYjOwcjvW4a1f13E9HlPmQRKDn0SDZytcMiwiToj6zO0wZKS0lVRhWIy9holC25mr1UohT/SO9ZJDXXkpCTdfoXb/T70VOVZ/qVf3SV91v9tUXIzqHaz3x3K+ke1r1JPx667tq8yh/gzwUEZDB6jUxBQJwzoCkq0UA5JhmcUTJ0csJyynLOctpy6BGKIlAqF2SiwjJTERB8pEdopxDQPornemVEKg/RumD55D/dfUQREAKBAG4Iv6+f9Or4Tgy8hGxkU5r5K3nlIPtfZookQQRmEQQjmDR4zW9O4aWlqHnft2r3LslAj2PBGXkZeB7ZpAtDUXPkZ8tp6ZRc3L6M+mF+rHkmchBjyPCLZnqvKIivRO4Vn0dQlAP+e6IQO8EQHsAYBiuKbhwk7PcM7y9fJdG+3KC6MOjPqQwsUZXIxADPQObEj3K+Mynnol/L1O+3RABCMCZrjPetUpW6zkPQM5AJEbPgeM/p5+JGGg6oWcd6DVsfE5avqulB8KwF7Kft1MRv8hksAsioMzMHg2AjD8RgHuGQZ2/5/wPyV9z45RyCGiE2Gu0QHZM0wWU6wj0TAjkE9T+aCU8EVCnyZlVD8dyXJrfotxDoEcCKNlrvptR/z3ZH/21SJYiLTKwPdiG1MaoDuEo7hGuS4Sgt0Gi2httcBCaCPRGAnqZD4rQiffa0FsUAOe/J81638m49hYpIDpwXz9kLxR564kMRiMDYYmAhJvYc/R3CMD9zpxq6CUKoI4s46MwNSUeAmn6ILrtUPuIDpTTn55WGkjuUSKHYYmAnGv0TqzRB46gTCdWh1AyWHSZQ/rKyLtWLRpQ9OAcRCxFgillEOhB5rJ1USJCIYlA5GhAGglGYXJluk3bWkSmIof1kHlb/Sh19x6iBBpcyP5RyiAgQhB5UKnVBBFKSCIgZhxtZIgz8Khr5H0B1ElJ/PPIvWWtcrSRcwlEiqMlk7WUV4l7RyaBEYhfSCIQyTlAAEp0w+c6pPxRmTrh/2d5jXhGOhg5hBwlbDyS7BMJjDTQ1N4irUtIIiC23lpQGg3KSFDKIxB1KgACUF7WvdQYlRAobybCiLEXOR5tZyRCEGGjIYjAh8f/OccZHO1K166LuCQUmV+T5Yi/ikgIWFXg0zQRgtZLDzUwal1CEoEWzgJn4FVFJVdGiPTkkSZk7pV5z7VHIwSaomRVgU+jZJ9ayRwisCHXmkRAobcIgtiAYojTYt2RVgVAAIZQqyoPoWTRSLpL3oBf7LUJQYTE0JARAQkiH7mVPha7VkIic2/+TiUlj2JIJXfpFgUEziAgOxEpgVmDF5Yvn5HgtWtlK5QrVtr/LOuL4IemIgKsALjWIa7+SkkwS6Vv8Rm5X5Ugv8sRkMGOMr1F3kAuGe+xIsaKIrpsVwRSF5II/PjxwwJ6BMC9Khun9prTO3sdVB04AuOOIxlacheB2qHjLf2GDNyV5LnfuyLV51rhuTokERAD21L+O+c9EFLrEoEIYVQZSXI/lpLhc0kElG1+xx6V+K2iXRHmmEviGrUux0Z3kl+EEpIIaARXopMs62Bk6FU5RVwihE4/f/7MHKpX1NT+HwRkU2rMIy9t2fJzhLXooyuFI8qpAUuEAhGIIIUB2iAS0NogEgUYQJE6fQStLtDobumga35mRYFXeRyRTtnMCCUkEZBTcXQgQmgelYswKiIK4JEttR5HQP3AmVR2xCZCBo7L6+yVjmin9CVCCUkEBMwRpT97DXPG5VVOxk8j8bOyKHU9UYDyMqXGewgoOlBKv6/UAxm4J7+tXzv+Jh0isIX2f847wmwR/tzhxWN39XVrEkAUoCt1maqxrfsGZKC8ujmiPYoyRChhIwK//fZbcVZNQk05lWtp6EQS2RionCypyYdAy5UFkIGycnUQAeUdRChTEQH26i6jci1JgJJrdH8KCPSCQMt9ByAD5bTEMTiNIp+wRMDBvqKAXk4169fUkgRoKoACAj0i0LLfYPfKaAxEoAyOp2pxJGZECcOcAiLQxa2MmaYClIBFAYHeEXAsQTuSUAgZuK85R3A+e02U6eqwEQHHUo0oiRn3VbJ+DVrS2WJ1gO7Jss/68uaOPgRa5Q1ABu7J9KyTP3J9lAR2iMA93Zjm1y02CyIfYBr1mu5BW/0rZ5QRaG8CVzT0iGM/e02UJe1hiYDY61lQX10fZc1mb53AEZ15JSvyAXrTEtp7FoFWU21RRqFn8Wp5PUSgEfoOIhBlO8dGkF66rUMOr0iAQqcUEJgBATmY2tE25dww3XZOu1x/hCf5RyhhIwKOv3zUfDPlOAItSAD7AxyXD1eOg0DtJELZwihOqAcpQgQaSQki0Aj4/9xW4cNXI/eS32uUEmW+rC3y3H1WBGonEYoMKAmY8hqBHz9+WOzh6zvXuSJsRMDFwOrA2vddNFKQYy7p6PfqIlTZt77Q+nII1CYD5E0dk51jYCqbGKXEackCEYjAApBKH0UCNFLYc9wlvyNEWUmw3KYbBGqTAfZXea0ajmlS2b4oJSwRkEMq6XBSXcyL7atezcQlSMC+LPh2XgRcI9BkB5fvbL++r2sQgX18bN9CBGzQblZcM2EJErApBr4AgZ8I1CYDrCTYVjyHbYw0LRM2IiCRLFlric8o+7qya0RQAt8jdUAC1mXAWRBYIlCTDNAvl+i/f3bspQIReMd39+iIUzl7DZnpz5C7oi9rssHYPOPPGRDYQ6AmGYjknPYwqf2d479vVGeUEjoi4Pi3J7bYfFQ9kQA55zWnXfocJOARez6BwFEE9KdbpfvjVn0kDz5LRQRpC6+r5yP99w1E4FnmU51xhLzWOoaWCJKoOZVq8bCFEai5moDI6aPwHEQgEuEKTQQcGexkx74reK28APYJeMecIxC4g0AtMkD07lFKjui0ViJEKaGJgIOFRQK/pRLUzAvQHCcFBECgDAKfPn0qHqZei+KRL/AuL8cGa5EGpaGJgCNsHSkc865m9Y9q5QVoBEMBARAoi4BjkLRGBiI5q7IInqttDZu75yLlq01HBCIlaJxTxXJXOzbHWOsUkIByMqMmEMgR0H8E1CDz5Pb8Qn3Nvt09F+nvoEMTAccmDpGWbOQdu9ZxrSmB2XGuJU/uMy8CtVb8zP737S6bGSkhMzQRcIxcZ5/3qjGK0D34V7N5HRRPXg8BbZB2d2R65Pcz51a5MIYIHOwnjqz2mdmtg1gtjYhIgBg0BQRAoA4CtfYYmLVfy2Ev7VyJz5HwDB0RcOyoJUc1Y3GFt5YdItK814xy5pnnRMAxjbrs27NGU11EIFLUFCIwid2oMSVAcuAkysRjhkNATsWx78qSDMy4isAxIBWukUqs1iyQcTGxxW2G/1hjSoDkwOHViAcMjoCifo717jkZmHEVAUSgseK7kjQaP1bV29eYEiAvoKpIuRkIbCKgqbnccTuOZyP9joFUtCnq0BEBlxNTvbMUx6ZMS+PCXzvPok08Zw8I1MgXiJTx7paJgwhES1qHCLi1qGH9rpBWTgTIC2goYG4NAisI1MgXiDaiXYGh2CkHsYqWeBmaCEiSudMpdTwLm3UnCM5kDIpZFSoCgQoIKErnzhfQSHmG4oiqQgROak4p55/XMwMRqBENmGmK5aTacjkINEfAvb+AiEakJXAuwOW0c/9R4jjaVvfhIwKOv3+M9GcPDuWVg3ZHA2RkKCAAArERcDix3BEqbD56cWAIETipNRCBk4C9vb055rTyzh8t0eU8QvwCBOZAQIMC9xTB6JFBx/4M0aZVwkcEHGwsmhBKmiR1ytxpO45H7/gl5UFdINAaAUfWe25XZKNHLo7BaDQfBBEYTIMdiS15p2eVwGAKw+NMgYBjVJvbhZHzrhwRlWjT0+GJgMOxRZufKWWJ3NEAVgmUkhT1gEBdBOSoc8dd+njkqEBprFQfROCk/kMEjgPmwCrvBGwcdFwWXAkC0RBw5w6NGBXQqojcBpY6joZV+IiAY35rxC0y3dGAUaMo0Yw17QEBFwJyao4wd3KOI0YFXHYVInBSyx1EYESFdUYDZDxIEDypuFwOAgERcO8tEM3B3RWB6/9uokVXw0cEHBvjjDbX7WKtiemTIHjXnPB7EIiDgDNxcLRBlohNsoMl36MNrCACcfrn5ZY4owGjkabLIPNDEBgEAZdzS45ypKiAC6toOzKGJwI/fvwozsgU6h6luKMBishQQAAExkJAI/fkuEu/j5RP5IhIC+9oJV6LFgi5GNniNt1+dM75EQ3oVi1oOAjsIuCyq4lURBvx7oKx86WDCEQciIYnAq4R7yiKKmedOl/pd6IBOxaCr0CgcwScUYFoO+ddFZUjWT3iACs8EXBlbUZL1riiqA62mshERGW9ghG/AQEQWEfAGRXQqHeEwZaDCBARWNfHzbNSJNeIdwQi4Mz+JRqwqZZ8AQLDIOCMCvz555/d4+RKxI72r42hIwIuIWjUKzbcc3FFSoQN0YCeNYO2g8BxBJxRgRGWEs7ig8ISAWfYewQi4FRQogHHDSlXgkDvCDijAr0PuJx2VgOuKNMnIYmAwvauKYE0B96zgkp5NM+UnqXkO9GA3s067QeBcwg4owLRQuDnkHl7c/8/Q5Tt7kMSAefcd3KaZxUi0vXOaAnRgEiSpi0gUAcBV1Sg96RBxz42yQel9wi5FOGIgCNLMwGe3hXu6bm4Oi3RgJ61graDwHUEnFGBaH+5ewYlZ/Q1+SORpdbJ66GIgMBI4DjfW4N+RhGX1zox6j2Mt8SKzyAAAscRcE039p40WGNw2hqjMETAuVQwJxWfP38+3jMCXulUyp4JUkBR0aTgCGgULPKrqciUkyRnKKOsqGHPeURXoHfalihJcVdwqeWbWk4RhCECzuzMRARGCH0ng5WeqdR779MlVzo4v5kTATn4o9Nr6m89h7bPSNgZBm/p5M5gsHWtc+okt+GtyGcIIuBMfstB7n3E69w7oJUCbnU8zoOAA4GrWeCzTJspiz23maWOW4e+S+jSVd05g6GIZ4voSXMiIOfsGvLSOvoAACAASURBVOXmAvjjjz9K6ELTOlyKKPwpIDAyAjKud6OOM0TNnCPfFg6upE6r/TV8VQvS2ZwIHA3R5U797HGUtZp3ldKlhJobpIDAqAhosFFqSXILI11bLq6kwd6nByQHRWVd+OR+7fv371XF3pQIOJNTEqhynr1PCSQFTM9U+n0EfKr2Gm7WDQKOiOPo/cVll0eYHpDiO//6Pdl2kY2aetaMCOgh00M730fZIEds2oHTKJ2zG89EQ6sh4Bq9jR4VcNrm3qcHkvLWiGTXtM1NiECtuZbelwompdO7S/FGIUo5VhyDgDL9XSFc1Tt6cdmbUVZgiCy59Csf8NWaTmlCBFxJbzmAmhIYhX06GbrqpoDASAi4Qtu5fRm937gikKPka6m/OBMrc11TZMtdqhMBlgqeF6kLs5qhp/NPzS9A4DwCNQYZMtKjL7fVICp3RqWOR4um1NC3GoPaqkRALNqV+Z4r6ghLBXMT6Frby7RAjjLHPSMgx3V3eWBuQ14dj04EpAuu6YGRsKs1ze3OS6lKBFyKlXfaEUe5LvI0enizZ8dG248jID0utTwwtyV7x6NMO+6h7JpiUb0jFedGb7kOOglUNSLgUqocKDnM0ZybS8lGJEwjGRee5RgCtaKMSztzrHV9XyVs8+cudTyi7amxpNA5RVCFCLgUaqmYI4a6XUk7tbJR+zaFtD4yAiLJrmjZ0rbkn2X0Zym//fabhQyMGFHpOeJtJwK15lBGWiqYGxlXfkCNTNT8OTgGgZIIOJcH5k5/eTxi1HFPLq5kOGeYe+95nN9pwNvrkkI7EXApUt5BnSETp+IcqduhWMKLAgK9IlBjmjG3L/nxiFHHPT348eOHJSIwWp5AwlBbA+f64jiWTxDpKFmsRMC17G0JbmlQSgJ8py5XfsBIa3nv4Mtv+0OgJQkYbTXSEekroru0tyU+j5gnkPCsMfhVcmzJYiMCcs415u9G7pwuNj7bqKZkh6GuNgjIIdVcHrh0djPlBSwl7Jj7Hm0/gRyzWtPhJZcU2oiAQ3mWnXNkVinFcjFL8gPybstxdAQ0qKi9PDDZGjmsEeezz8jcZYdGjeQKW1c0N+llei+lmxYiUCN8N0PSjoNMkR9wxgRybWsEakUWk2HN39VXIM1vb67I5Cj/O7DVR3paUlicCKjj5p3JdTxDeNuBHfkBW92W89EQkBOuMb241s9mGGgclbcrT6BkaPvos9S+zjGYW+qrpszuluJEoEbHHXWpYC5MV2iJ/QNylDmOikCr5YEysjLecn6UdwQc+wmMPrUr9DQwdqz8WpKBu3a9KBFwzSXlDy2iMUMndYXjSs0pvZsIjkCgLAI1phZzm5Iff/r0qezDDFKbI1Fz5ITBXOw9LCksRgRYKpiL/v6xi1TNQKLuo08NrRBoSQJGXoF0V56uHU5HThjMMXfZ85zE3omwFCECtRJ6Zuqojrml0mtPc0XnGATuICCC6hh15oZy73jm5YFH5KZI4h5+V7/TaHmGIv2uMW1+dYqgCBFwbYObK9dsTsyxXIpEwRlMTn/PqIGEQ99z+7F1zPLAY/oiR7aF4Z3zVx3XsVbHusqV97XE/8r0720iUCOUN2MG71K4JT5LVhQQiIRArWjiWv+RXWF54HFtcCQMlsh4P/4E7a+MuqTwFhFQJ17rYKXPzbBUMFdRF3OcJQyXY8lxXASk5zXCpWv2aMbBxV1NcER+Z4xSOqZ9lzp+dmnmLSJQoxPPxhjVWV3zcYx+7ppCfl8KAZYHlkKyXj2OhDf5kNmKBtA1lhSeGfhdJgIOpViyGinJjFnurgzd2ToczxsTAZd+L+3H2meWB17XCdfKsOst6veXLixznRfZEOk4Ui4RgRrrIvVAs45gHSRrtmTLI8rPNfURqJFTlBvD/HimVUcOybr2NjnqrBzP1LJOh53P9V3HR5cUniYCElqNKYGZO61jLu6oQrTsGK3uLZ0W6dSUzKxGyY09ywPdCPvrV99YOpoSn69kufuf1n+HSEsKTxOBGmt9Z5w3ytXOkUwyY65FjunyWMZHjHxtrk7nJIPR/xRliYnrswweywNd6Natt4TjX9Yxcz9z5YPlGMuevYqunyICNeb2zsxr1O0C9e7mWKbD0sFf8tOo5gzREimddcRSQuOFd40IYm740rHu+8oAlnjGmepw2KaZ9hJY05UISwoPEwFXWCh12vQ+21LBNcVIWJR8n5l1J4zlFNYiAEdwhkglFI+/C++WJEA2i1IWAUdkR5G52cuZwckRe7V2zR7Oh4lAjQ5N+PpXd1gT4t1zs49q5RSukoCEPWTguLlmeeBxrHq60pG/hN2v9y+FW37gEBGokekrogGD/6UQyfGUfN9SgJ6M0J22liKykIHXUqgxhbjVN1ge+Fo+d65w5IjNuKnQmgxaThG8JAIsFVwTme+cwqlbRu7O+ZlJVukOthdi82lGHzXXGDRs9YOZVxrV0g6HfBUWp/xCQER2S79LnV8jXrtEQM6j1Ehq7yHowO/dQCP3Payufvd+h/mOHDpMOPNRj1ge+IjHqJ8c0R71T8ovBFotKdwlAo4w0NKRoQSPXcC1acfjXeb55CJW0mPIwLvxciSRLW3F2mflfcw+7VWzNzt2xMMHPErQabNSH1quztskAg7mlxqR3peNeYRjzk90tLJyd+CZ9FfvcoBi8bOWWlHDHPN0LAcy85RXC51z9Cf5AcojApp+THruepftSmWVCKhzSTiuBqR6NXdLeUTA0dFmZtyOOc2kv+l9VjLA8sDHvjvDJ9dodQbszj5jjSWFKfl5lQjUmBIgrLquFo5IzMxEwEGsEgHI30UGZhqdsjxwvf+OfhYiUE/CtQbkus8TEfh58sMHazSAkN62MjlGsDNn5boMV04C0vEseu0gqwnDV++fP3/e7jx8Y0fA1Z/sDe/0BqVXPK31r58+Z4lPjRGUlImyjgBEYB2Xq2c1f19jmit1sNHJgEM/E3av3llddLUXlPsdy5vLYXm0JscmTnlfk816igi4kxTozPvidxjamSMCQtuBad6RlsejkoEaU4ZLLNNn8on27Uatb10RY9VLWUegypLC5a2dnZ3s0CXaz58dTmt2IlA7KiDnNRIZEH7KgUhOuea7bAYRxGc70eoMRKAN8q5l5X/35eVjOYmAbkqnXiL++Bki8IhHqU81prz+7lT/ybEZgQzI8P8MHZrzhpbY6fMI+JXS3yj1QATaSMLtl5+mBtyJQOrcGmFQ1hGACKzjUuKspqXWHI7znEa0mlftsbA8sEepedtMjoAX37Xa3T75Zw7V8sYuxpcb29lD1UvM888QgRyN8sc1snBzXddxj2RA/zHy00A0iATIPjBYKK/7JWpk1UAJFI/XIX/s7oc/ow1rTVJHXBqz0p/FcijPCDjYn6IwlHcEWkwTqDPLufZQHDp41H6wPDC2hkAE6sqnxrTcT5muPZZL2LkxkGEU26E8IuBwUhCBR4z1qdWIVxvxRC6OiFTe7/eOWVEUWTN+tc3lG+I/ef0W1uiL6Z8In3IE0uO6lxHKIOR7Haf7zv4OEainAZrvdIfd1hxfVDJgT0jamWZgeWA9vb9zJ1f2+p02jfhbF+HK7VE+GN8kAgK3xpIh/tv9UY0dREACp6wj0IoMiO1HKSwPjCKJ+O1w2Ccilo9yV6S8xpSAZJnKLhGokagghiL2Q/mFgIsJgu82ArU6Xs7GdRyBDLR6dj2/jJ3uT+kHAUf+CETgUf41InO6R152iYAurJFlLUUgS/iXWFiek6tnveNWDrElGZCu1Rh5LAkQJKCeXpe+k2PemlVk71JyEK1l/1sj4C+JgJro3utYDU1JC++QzHkkh7QUXInPjLxe69NMZKBVsqR0meWBr3Ux6hWO3DGIwC9py/7UyFnSAGBZDhEBjdZrjBzEhmYvwrqE41/WwfTLMc2agQzUGHUs9S99ZnngMT2MepVjUMgg8Je0a/jYrZU5h4iAmumau04GQu95FmPUjlCjXTkmpY6jZqrXwPPsPVqRgRqJs47Q7lEd3TJCZ+XD9e0QcOwxU0Pv2yF27M41+qWIxlY5TARUgSMstDQiLCl8e/vtt9+KRwWItmx1gfXzrTLpl0k86627drZGEtKyP6fPLA+8JrNov3KsJGuZJxMB3wiD7FNEoNYUwewM0dHZZsf0SocfhQy0eg6RAEX5mJa6on0xf5OIXcn3maOVtaKP+VLBNc06RQRUQa111zMbD+bh1lS1zTk5UYc8XhlSkUHd+26pZWjWnmctO/nu8/D7dghIH9fkfPfczLa+RpTuSJTxNBGQGrKk0NsZHcrBlMs9mX369MliBPeM6F0ywPLAezLn148IuELYa1nsj3ce81ONpN2jZPwSEZBYHEkjS6M4azapQ0HYXfC+MamRI7PsAyIDGtWfLTLaNZYiLdurzywPPCutPq53bS9cIvLVB4LvrVSfrtE/j0ZbLhOBWg8yY5KbYxtPGegrDuVddTkSAsp8X3N+znNHWX2SkINIHn0+lgcmKYz37shsn3WAoj59tE9dve7MKp3LREBqrk1Jrjby6O+kKLM5MIXKjuJz5rqj7HA8E1b2iSKTAYexPqpjZwxPWYlQWw0EHLkyM24mVKOPimicKbeIgG5UI1w62/y2KylnxujKmc5w5tqIZMCRW3KUBLA88Iz29Hmt7PBRfTh63WzTv65BXo73lcHzbSIgp1UjzDHb8jfH/NFsGLrNbRQyoD5YI2cnNzbpWHpKpMmtaTHqTzIv+T7THgKKbNfwlVdI+W0iIBWtwXKkfDMZHIdhny2yUsN8tiYDtYzLmvGXUZtt2q6GTkW8h8vGa3p5llIjYndkqeAa3kWIgCpmSeEavNfPOaZcNHqjlEfAldy55nzTOclSG7HUGGGke+bvkIDyehS5RteKARGMGUoNG3GnTxYjAhKmYxSbGx8dX2U8vSmbK/ObEZxHE2p09GVfaPVZ/XzGJV8ezemjVsfARPo7Q5HNdUz1Lvv/nYh5UUnUeuAZkt4k1KWgS3yeeTtPt9Fp+de+JXTjSB0sD3RrUcz6HYO8WaYqa0Tt7q7YKUoEpMI1RkZiV6OPbF0rB0gY9BpahTprsP8jTrv0NXeNjRd5anciUFqXVN8MKwYiLhVc05PiREA3cYWRcmUUQx29OP6FcBYW3lI3RAZqjALy/uA+FsGnzImAKzo5emRXg1V3vyw1KLYQAZYUljEYrixT5nfLyGevFhmBEciADM2ducc9jPiuDwRc+Uoj61UtH3hlqeCa1lmIgG7kYpFLhjWyMrk64ExLdtaUvta53snAnSzkWhhzHz8Cjh0FZcdHHpC4BnG5/yuZOG8jAlLPGlMEMlajKpSLTJEn4Dee6Q69kgFNIantFBBw5LyMPEVZI0+uNEm3EgF1IQk8ZzGO41EdmwgOnbB/Q9wbGWB5YP86V+oJGIycQ7JWXy8dCbcTAQHjcGZLQjHqsjjHsh1hN2oU5Vy3rXd1LQOx7BdnP7M8sJ5O9HAnpifPSanGwNexesdOBARjjV0HRTZkbEcrrumVUYlTZPmLfNUwFGedf7reYWAiy4O2vUbANRAZ0Vb3slRwTepViIBu7Eo4SUZM7yMuKXSF5mZYw7um8K3PRSUDLA9srRnx7i9nndvXUsea3x6tuLDKMXcOdqsRARlAKUD+YI7j0damCjfH1IrqVN2U+ggI90+fPtn7wpH+JT0oPd9YH1Hu6EDAlfRWMtvd8dxn66zl20otFVx7vmpEQDd3jW6XBm80w+YKz42G05qCRz7XmgyUzjyOjDVtO4+AK4o72vJl1/Rt7tfc5KkqEZAq1gBNBm6k0a4rYWfU1RbnTV67X9ToD7lBScfKVRhxnradJMe7syMSKf0byTa7oiapn+q9BmGvTgSkBDUSpkZycq5Iijo6pT0CStLLO777WBGmkYxxewmO1wLX3w6PlMclIl1jurtGBKU6EVCXEYAutpkb0RoA1jIBLryYHqglwf371CIDLA/clwPf/kLAtTPeSDlcrinb3IfVWsnThAhI1VhSeM7kuELII0VOziEa72o3GahlVOIhS4vOIKBoUe6MSh7rD7lGKD0vFVzDvxkRUGNqMKpRQlHO6QHCxGtdo805FxlgeWAbefZ4V9e8t8LoI5QaSwVFvmrm8DQlArWmCEYIR8lZu6YH2FwolnkqSQakM0z/xJJv9Na4BmjuzPcauMoO18gLcC4VXMOpKRFQg1wj3WU4a4SQlGvebpSoyZqC93quxKisRrZxr/jS7nUEnKPdEQipa4o291ctCFNzIiB1rAGujGLvIXAnaeodm3Wz1vdZkYGrUSCWB/Yt+1atd819jzAtUIKc5w5/7bgVeQ9BBGqFW3pPjBNOVx3DmtLl52QAKPEQ0AhNxiGX1atjrQyA2MWTZQ8tOqtrr3Qxfd9ilFsS7yv9MD37mXeRjRYlBBHQgyt0fwawq9f2vqTQNT0ggoHzaNEFj91TBmJv7lbyE9EdIfx6DBGuKo2Ac8Tbu17u9b2rvmj5u5ZLe8MQASl1rSWFPTs85/QASYOlTWv5+qS70gEZ7fQaIf+lPFLUeBYBl7PrfVrASZASGWiNUSgiIMV1KWMCXO+9h8Fd0wPCngICIDAfAs4kwd7trWu6JPdJwr9lCUcEBIjL0SXge3d4roQe4dN7CK9lZ+LeINArAq4pR9mU1k7ujkxcWy0nX6T3CBt9hSMCEprm8XOgHMc9Tw848yl6J0l3Oj2/BYEZEXBGA3q3J+4VbfqHxwglJBEQMG4B9D6vqg7mIEiqs3dsInQs2gACvSDgjAZofr3n4vorZtlZTTlEiZaEJQIasTvnZnoPgTujJr0v9enZ8NB2EKiJgByRy86q3t7LLCQpLBGQAjkz5HsnAiJKzlyKKEy1d0NC+0EgMgLOfKMRBhQuItByqeCaPoYmAmqwS1FHcHQubBS2GqETryk850AABH4h4IwGyIaMYGMdU9QRIyXhiYArKtBzsmAyZHoGdTjXa4SOnLDiHQRA4BEBBhKPeKx9cmAUcZAVngi4lm+sCb3Hc85klogK26OMaDMIREPAHQ3ofeo1yUv/XFt6oBVlpUB6Rr2HJwKuXZ1yEHo+dkVMkvKP0qF7ljFtB4HSCDhC3slm6A+vRikO/xNxSWV4IuBgZBHnaO50HOdSwohKewcrfgsCsyOgaEBy2o733pcM5vrhiEhH9D/hiYBjjiaiIHLlO3tMVOAsYlwPAvMi4MqEF6nAtr7O2YqIUXgi4AhhjTjKdUYFIiruvGacJweB6wgQDTiHnWMXVy37jlbCEwEHex2RCLijApqioYAACPSNgEi9YzpgxGiAJO0iTtG0KDwRcGTFj5oN74wKiMWOsOQyWgekPSBQCwFH4ltOKkbKDUgycRGBaLY0PBFwOLdRiYA7KjAqbqnT8w4CoyIgh0Y04Jp0c7JT6ljyiFSmJAJKQBy1OIhTrvwsJxxVc3iukRFwTLHmdmHEaEDSh/w5Sx1DBBK6B99/++234nNaIxMBd1RAo4poYa2DqsRlIDAlAjVswsjAOnxQtAFV+IiA4491Rk98c0cFtJKDAgIg0AcCzikBjZBHjgZIwg4ioH+PjVTCE4FSoZi8nm/fvkWSQfG2uEcAwjIaoy0OIhWCwAAIOPZhyW2pSMboxTGwiuaDpiQCMzgx95wgUwSjmz+er3cEXBnvORHQOvvRC0SgsYRdijwDERB2jmmV3AgwRdC4g3B7ENhAQHk87imBWVYROQZV0fLUQkcEHLs6yZHNwGJlH9xhQWE5A6nasLWcBoGwCDh2ZM0HATqOlvnuEgZEwIXswXrlZJbKV+LzLApcY1TAFMFBZeYyEKiEgHvjINngP/74o9LTtL+NY0AVLZoSOiLgIgIzLX9zYZgTsoj/r93efNACEKiPgAY57ikB1T9TgQg0lraL2TZ+rOq3dyS75ERAx6MvyawuNG4IAhcQ+P333y1R1Ly/j75ccAm7ww/JJkcqoSMCDgFE/Ocnt0LUSByUoZgl98ItL+oHgSsIOEauOQHQcbSQ9hWczv7G4YcgAiek4FDs2cJaCe6vX7/aRwrCdpb8i4Qr7yAQAQGHs1qSgFn7948fP4rbzmh+KHREwEEEFDqbtdSYIojGdGeVNc89DwK1In4iGzMWR54VROCEJjmWbczsqGoZDPYXOKHkXAoCNxBQn5ZTWY7eS3+ecUogicW1jD3VH+E9dEQAIlBeRWpMEcgIkTxYXnbUCAJLBLRip7TTX9Y365RAwlpka4lJic+p/gjvoYmAI5Q9M7NNCufAda1jKKRGAQEQ8CDgmDpd68ezTgkkqWm5+Roud8+JYEQpEIEokqjYjlpTBFqhEUnZK0LMrUDAikAtEsDA6ZcY7zr9td9Hso2hiYBjTaw6EOXtrdYUwexhRXQNBEojoH+uW3Mspc/Rd98l5/jflkjLrUMTAcf/QEME3pW7xvyijJMMyky7Ob4jzBEIlEXAlbi2RiKY2nuXncMXRcI3NBFwsLBo/wP9rmr1j2r8F0EyMIruQAbqy5g7joNArSk99dmZ/kvgiIY4iEAkXxSaCCQnUvI9EvhHFNB9jWON7Ja8mG90S5P6R0VAJECRta2+VfL8zHutbOmPI8E6ki8KSwRcmZqRwjFbSlf7fK18ARkryEBt6XK/3hGoSQLIC1jXFsc0aqQl1mGJgJS/JMtNdUEE1hX906dPFrwT7vk7ZGBdBpwFgSUCNUmA+uj379+XTeDz29vPAUxuw0ocR8pXC0sEXEkxkTI1I/WwmvkC6kSQgUjSpy0REahNAsgL2NYC2asSzj+vI9IOrGGJgGvuWp2Lso6AsHEkaObKnx9DBtblwFkQqE0CFPqmbCPg2Lchkv2bjghsi5pvhIBCg7mzdh9H6gxoAAhEQKA2CWB572upQwReY2S5wvW3mpbGDlapQoRuApDXr9EISwsHUyIe5xICLUiA7knZR8DhjyL9AV7YiIAyKnNnUeJYYW/KMQQ0f1UC86N1aMkSBumYbLhqTASUv1Rzak59k5ypY7rkIAKRlmmGJQKOUIxCYJTjCDjWzu4RA5YuHZcNV46FgNaU1yYBWjZMOYbAjx8/ig+MIvmjqYhAJAZ2TP3aXlV7JYFIAmSgrcy5e30EHNHPPcKt71ghcE7OjuR1iMABGTiWa0SakzkAQYhLas9ZykhpZMR65hDipxFmBByRT0hAeaHJDr7C9cr35Vt6rcawEQHHTk4QgWtKok5QO2ypTiUjSQGBERFQtM0x2HnljLRxGOU8AhCB85gV+YVjfpqlatdF0yKRSUYt0qYb19HjlyDwjkCLKJv6ElOj7zI4eyTi9opkXfleuhChhI0IOIgATuWeyjnmyY50HlYU3JMbv46DgPpQi+ia+hBLdO/pwRFbdfYaiMALmTj+9pFQ8wvQD3ztWEZzpPMosYalTgcExCVhEWiRFKi+RQJuGZVwEDgRwwglbEQAIhBBPdbb0IoMyKhB5tZlwtm4CGgk7sh5Okqgo4w640roWMscPgki8AL7I0p+9ppI///84vHDf92SDMioYtzCqwgNfHt7k6HXiPysrSpxPZGAsiqo6ZUScsnriOKTwkYEcrBKHbMkrWzHaEkGZOSisOmyqFLbKAi0mgqQvYQElNciR94aRGBHThrtlXL+eT04jh3QL37VkgxItkwVXBQcP7MhIPvlcBq5Lds7hgR4ROuY3oliv0JGBCACHkV21dqaDGD4XJKl3rMIKArgSCrbc/z5d6ywOSux49c79n2ACOzgr5F7rtyljplX3gH95let9hnIdSNKp7oJJT/vEIHWUQD1A5YIehXHQQSi7G0TMiIAEfAqtKt2kQGNznPnXPuY6IBLutS7hUDrKID6mHYMZJ+ALQmVOa+BRml7BhHYkY3jn54kQIofAY2MWpMByVqbRxEB8st75jtEiAJI1z9//jyzGKo9u4MIKO8gQgnpHV1zzhEAn6ENUciACEmUrNwZ5D7LM2rk7XAKV0ab/ItgPa1z+CUllUYoIYmAa9mNwjCMEuuoXctNVJYGlX0H6sh8hrtoCXKEiJd0XI6JUgcBYe3YR0C6FKGEJAJuti1CwFLCOuqnEcvSMbf6DBGsI/MR7yJ70XJJYN5ntCqB7bb9WpYiP85VIBCBHTlqfjdXfNexOjah4x1BFPrq69evVeR5RE/U8UQ0KSBwBAFFEEUgj+hWjWukv0Q1j0ju+jU1CEDSFZGMCCVkRKB2x1PnghB41THCioLU+fSOzL3y7r32ms4g18u9Y01xqV0UDwKtZO55mnO1hiQCjh2c9jpY+i45BzrbOSU6enWUJMIkb70nmR99Bq4bG4FWziDXybVjkgJ9eqdBSu3BZy7jCP4mJBFoPRcn58DyM1/HqzX1k3e2V8cQAp+8e6g5KgFQ6Jj/SPFoUJS8jwhTPRCBDx925/9IMPN0wkh5AzlJgBB45B211qgEQDrJdsEerYlCAJLdgQhsyLllmCYJZ/kOIdgQ1o3TEacKktxFCLSMNUInvQExP91AQM4gop1J+qdNgiKEjDfg6/K0Iiuto81JvumdZMEdVXJs3JCAv/suRZIRoZRBQMYu4lRBrieQwDKyjlBLtNFgrmc6ZiqgrJbIvojQi9gvsY7wWf4kQgk5NSDhqUNEENRWGwghl1Vfkb+onTXpgDotq0vKyr1GbbInWjIa3aZIv4hAldGIXmQeZVOokERAquDeVCgZ97vvEIIyHVe1yAjKGN6Vifv3kjlRgnJyd9UUffSf66lyZij3EeiFAEj2siNRSlgiIIFGHyHmHTkRAhj9fdWOtBthLuO1YyV0KUqA3O/LvUQNcv6aaoo++k+6JP1hl8D7klf/60nukn8kmxGWCEg1BFRPZEDCVXsZLZbp2L3JPk0dROrg9yURvwY5f0UQe9MX9ga4r1s9RX0S+dN7lCmBJIHQRECNlFF1/NlDLhTXMYQgqdn1d4VMexnd5XoEKbgu8yO/7NX57KQ/xAAAElNJREFUS0ekG0QBjkh5+5peCYBsmdoerYQnAgmwHpLJckeQH0MIkhSvvYsMCsMc056ORWQVtoxoAK5JpP6vNFWo5V+9hX9zPZUTIBfgnu70TAAUAZIeRyzdEIEEXs+EQCMBnEGS5Pn3nmWfHIKcgbbQVl4Bo8JtHZDBVF9RyF/9JuHX67uegSmjbXm/+qbXvq/+HpkAJNy7IwKp4b0yQxkyzWWyDC1J8ty7HERPyYSvHFciBlrrPDNJzEf8cprC5RV2PXyvvj6zXM/17serpRM9LPtc08NeCEBCvFsikB6g9R9GrCnB0XMQgiTF8++9Txfs6YimEjQVksiBDOJIRbJTmF/Pp+fsLclvT3bpu94cQST96pkASJcVveitz3ZPBJIC9+wYpDwyioQOkzSPv/caMkwO4+i7yIFGypoj1zNrlBlZX2QIlw5fzzDKSH9PbiI3vTmC4z3Od2XPBEB9s+fIzzBEIKlnz4RARlJGJLKBTzhHe5+FEKw5oEQSpDsKpYpUasQtw6SIWUl9Sg5e9eoewl33E0HR/dWWEUf4a7gvz/XuDFr1aempdGeJZw+fR5H5cEQgKbOMn+aSezVKEIIkyePvclI9y7yG4RPZVJ9Ir0QiZNDSKznzdE2vfagGnrrHKM7geE8rc6UIgLCrJaeS9xlN5sMSgVxVex4tihD0HHLK5VDrWCRQI9SSHZ+69v+ue0Z8RnMGtfpnrwRg5IjtFEQgKXjPhEBGh5UGSZLH3kUIeg05zuhYe3lmCMCx/re8SvZX2PUi59ROEYAelgAu8T7zeSoikIDpVSGlmArTQgiSJI+9ixDo/90JcTOqT8b9yjsE4Fh/y69KCYA99r0ZCECS1ZREID18ryEqCEGS4Ll3EYKeo0JXnBe/uU9+IADn+pmuTgRAzrQ3HZyJACTJTk0EEgg9h5CJECQpnnuHENx3kL0Z+LPtJT/nXJ9KV2sVSY8EQIRPdmHGAhHIpN4zIVByHOU8AooKkUcAKUgkYcbR4Ples/4LRQF6zAEg4vP2BhFY0elECHqb14IMrAjz4KleZZ4cGO/3yIycgfZFkDOjnEdAuGnZaU96CAF4lzNE4B2LpyM5h95CyCQSPonx9AnJXH8M1JNRo63niUAa/fPnT6e7yNMPelquy5TPk/iICDxDsn6mF0Ig48aoZl2GZ8/2SAQhBPuEQP2DkeDZnrB/vfpJdL1LpE9tpTwjQETgGZPdMz0QAm0zSymLQPpzq96mi6Ib6Frtk/P/+vUrJLlst/hZm7CtJcez90kEgMHRvuAhAvv4bH6r+cSoHYCowKbYinyREgwhBfuj77NGu/T1OP8i6r5biQZGpeVWoj4IwK7Ynr6ECDxBcu5EcgollLdkHUQFzsnx6tWKFGh+tLdEqZK6FqUuGX+c/1VNvva7aGRY7SHyc16WEIHzmK3+QnNP0ZahMR+2KirbSeGdEg3llKI4yJHbIcMvIiZCTvjXptqrFUeKBogASgco1xCACFzDbfNXkQiBMt8p7RCQYVJkJuoUUo8EQQRLhFtOCKLbTrd15wjRAAhAGR2ACJTB8akWGakIf4kLS34STbMTkoXCljJeRAyO5RfI2eD4m6ns5o1FcFsSSQjApmgufQERuATbuR9p9NKKPavDUGIioPwCJZ0qtA05+PWHWopiiSyJNBHqj6m3GuS0smcihUSCyusFRKA8pps1tiIERAU2RRLui0QONOKSUxwxCVHRED2XjDpOP5wKvmyQ5FYzGiB9Gf1vgF+Cbr4AImAGeK16EYKaBl73ovSNgAhCmlpQBEEkQVGEViOzPUcgw612qY1yGiI10nk9A6P8vvVQo/E92Zf8DgJQT1cgAvWwfrqTDLuMecnOs1UXWw8/wT/UCRlo6ZNecroaacsByxHrJT1LLxFDOeqjL12ffpvqExlJDl73033VBhz9UGr19DCS/5aNKXUeAvAEu/0ERMAO8esbyIC6O5g6F0b6tSy4AgRAYB0BdzRAZFOkklIfAYhAfcw376gRVilWvVaP6qeAAAiAwBUENNWzZldKnFN0itIOAYhAO+yf7qwRu0buJTrWWh1EBZ4g5wQIgMABBLS6Zc2mlDpHJOCAEIyXQASM4F6pWnO7pTrXWj1EBa5Ihd+AwNwIaMS+Zk9KnCMa0F63IALtZfDUAmenU8fVXB8FBEAABI4goNF6CYe/VYcSTSltEYAItMV/9e7qGFudpsR5zfVRQAAEQOAIAs6BiZKkKe0RgAi0l8FqC5RBW8Lpb9UBC1+FnZMgAAIZAn/++afVDhGdzMBueAgRaAj+3q3dUQERDQoIgAAIbCEgJ000YAudsc5DBALLk6hAYOHQNBAYHAFtGrUVUSxxnmhAHAWCCMSRxVNL1FFKdLitOogKPEHOCRAAgbe3nwnFW3ajxHn9dwAlDgIQgTiyWG2Jm5Wz9fAq7JwEgakRcO50qukGogGx1AsiEEseT61xbzKkTsnWw0+wcwIEpkXAHYlk86B4qgURiCeTpxax9fATJJwAARAwIcBWwiZgA1cLEQgsnNQ0d1SArYcT0ryDwNwIsJXwnPKHCHQid7Ye7kRQNBMEOkbAuVxQdVNiIgARiCmX1VY5O6miAiTwrMLOSRCYAgG2Ep5CzKsPCRFYhSXmSfcmQ2z3GVPutAoEaiDgHGhgW2pI8Po9IALXsWvySzYZagI7NwWBoRFwRwOINsZWH4hAbPk8tc4dFWCToSfIOQECQyMgJ000YGgRv3w4iMBLiOJdQFQgnkxoEQj0ioB7eTLRgPiaARGIL6OnFqpjldjmc6sOogJPkHMCBIZEwG1L2Eq4D7WBCPQhp6dWsvXwEyScAAEQOIkAWwmfBGzQyyECnQrWvcmQ5gzZerhT5aDZIHAAAXc0gK2EDwghyCUQgSCCuNIM99ye6qeAAAiMiYA7GjAmamM+FUSgY7m6owJsPdyxctB0ENhBwL36iGjADvgBv4IIBBTKmSax9fAZtLgWBEBACDiXC6puSl8IQAT6ktdqa52dmq2HVyHnJAh0i4B78yBFGyh9IQAR6Eteq611h/nYHnQVdk6CQJcIOAcO2IouVeINItCn3J5azSZDT5BwAgRAYIGAOxrA5kELwDv5CBHoRFCvmumOCrDJ0CsJ8D0IxEZATppoQGwZtWodRKAV8ob7EhUwgEqVIDAIAu7lxkQD+lUUiEC/sntquXuDEKICT5BzAgS6QMBtG9hKuAs12GwkRGATmj6/YOvhPuVGq0HAiYB78yCiAU7p+euGCPgxrnoH9yZDmmNk6+GqIuVmIHALAXc0gM2DboknxI8hAiHEULYR7rlAth4uKy9qAwEnAu5ogLPt1F0HAYhAHZyr3sUdFRhh62FhpJGSXn/99debVl18//79TaMbvUR29NJUiwypXsqR+Pjx489zupbISFW1Pn0zySfJMskwyVXvSdaSfXolnTh9s6A/cK8mEoaU/hGACPQvw9UnGHHr4WSk9Z4MdzLmf/7559/OOxl9OW05799///3nsilNa4jEfPjwodhL91J7KHEQkG6UWkEjfZHeSIdUZyKDkrtIYiIW0j/poghi0k0RTOlGS8LoXC6ouiljIAARGEOOq0/hNAJHth6+OuqWsVXb06uk43bUJSzkCChtEZDTLUUAHHqiOpNO58QiEdecWCSCm0iF3vV8Z0in6nA9h+pVmyhjIAARGEOOq0+hjuo0BDJmNUbdzmcoWbeM/BlDvSo0Tl5CQCPz0tGekrrhqCtFK6R3y2iFyIXOO+6rOlU/ZRwEIALjyHL1SaKPkFyGqmW9MpIQglV1LH5SZNfp8FrqUeR7o9/FVblphRCBpvD7b+6OCkQ2Vi3bJuf07ds3v4AnvYOmnUS4Wsp41nsTDRiv00EExpPp0xMRFSiXHHjW+Gv6hNHTk0reOqF8jNmmAc7qnfN69PmW+ob8MUQgpFjKNkod12kYqPs10dAcdsvs8bIa1aY2Rbcgta91zdkf2Uq4je677woRcCMcpH731sNO4zNK3UwXXOsMIlDob1sCoD4o/SUacE2Ho/8KIhBdQoXaJ2NKOLW9MZVBJZnwuFJrCRx6G0NvJQvKmAhABMaU6+pTKTw9yuh6hOeQPCjrCGjkyTRADAKQogHrkuLsCAhABEaQ4sFnICoQx7AmIqNwq3ajo/xCQDoKYY2np0QDxu6hEIGx5fv0dO6th5OD4/2cMWe64O3nTnUiRujOOd1x4yWZUMZGACIwtnxXnw5jG8vQJkMuucy4VTHTADH1MemlVmtQxkYAIjC2fFefjk2GYhteEYJZsrM1DUAyYFx9ZPOgVRM63EmIwHAiPfZAJGLFNb5pJDbydIHIqDZbSs/Ke0x9nIWQHrOa414FERhXtrtPRlQgpuFdOkRFB0baqpg9AfrQO+kh0YBdEzrUlxCBocR57mGICvRjlCWr3kdnbA3cj76JCPSub+es4dxXQwQmlr86OvOzfRnnHvce+Ouvv9gT4ENfesZWwnM5BojAXPJ+elqWE/ZloDVS62W6gGmA/nRL+qXcDcpcCEAE5pL36tOK/csAjPxS5EMOVC+F2fXSHGh6aaStlzZOSS/lUeilayJio3ZFDd9qkyRhHQ03tUltS7JNsk7y138aJJ1IeiLHmHQn2vOUbg//lrlqIoc/CREYXsTHHlAGMZrhTsZX78koJyMtg52MdzLmycArFC0HWdJJRsRHTkAERzhEKcJcsirtoErUJ8KrKEWJonr0rNK1RCqkf9ITRdmSbiZ9Tfqr96TXJZ6pZB2fP38uhk8JjKmjHgIQgXpYh7+TDNsdh5ePujWykNH7+PHj3yOsZBxlKJPzTkZU906vyEBFjZ7IucgptSpyjJJvxJwT6aF0K2pJpEJtTP0hkQr1k9RvUrRCfSoRixStuIq7fqe6dF/KvAhABOaV/e6Ty6nIGKXRTXLcadQtw5Ecd6lR1m6DAn2p55YxLjkaK1VXi+kC6YKISKlnKFWPnJz0draS+mUiFXpP/TeRCn3W+dn67my6cPR5IQJHkeI6EFggIGMa0QGqTTX2HohMiAhzL5SVjyCwgwBEYAccvgKBVwjIGSpkW2oUW7IeEQK1z1Gi7glAmNshbeocHQGIwOgS5vmqICCHGzE6IGIholKKECicrHnpkoSlRF2aBtA0FgUEQOA8AhCB85jxCxDYRGDU6QLNJUeNfCgvgrnuTZXkCxB4iQBE4CVEXAAC5xDQ6FvOqcRIt3QdSnI8Gx2IOg2gCIwiFBQQAIF7CEAE7uHHr0FgEwE5qajTBcoef1W0ckRz7qXJyN36NA3AFrivpMf3IHAcAYjAcay4EgQuIRB574G11QUKs4so3HXYjt+LmJyNaFwSGj8CgYkQgAhMJGwetR0CkacL8r0HokYxmAZop7vceXwEIALjy5gnDIRA1GRChdsjrgZQVKHk1sCBVIGmgEAYBCACYURBQ2ZBQKH3qNMFjnD+1To1DdBy2+RZ9JHnBAGIADoAAo0Q0HRB1FH4Vedd4nfsCdBIIbnttAhABKYVPQ8eBYGo0wUlnPrZOtgaOIpW0o6ZEIAIzCRtnjUsApGTCc868yvXKzLCngBh1ZOGDY4ARGBwAfN4fSEgQhB174ErDv7Vb5gG6Es/ae2YCEAExpQrT9U5Ato3X07ylSPt+fsruxx2LlaaDwIhEYAIhBQLjQKBt58b50TdqvgOAWFPALQbBGIhABGIJQ9aAwJPCIySTKgIB3sCPImXEyDQHAGIQHMR0AAQOIZAz3sPsDXwMRlzFQi0QAAi0AJ17gkCFxFQMqHm1u+E5mv+VlGA79+/X3xafgYCIFADAYhADZS5BwgURqCH6QL2BCgsdKoDARMCEAETsFQLAm4EFB348uVLuOiApgHYE8AtfeoHgXIIQATKYUlNINAEgSh7D7AnQBPxc1MQuI0AROA2hFQAAjEQaDldoGWO+jMlCgiAQH8IQAT6kxktBoFNBBQdqLn3AHsCbIqCL0CgGwQgAt2IioaCwHEE9Pe9zq2K054Ax1vElSAAAlERgAhElQztAoECCGjvATntkksG2ROggGCoAgQCIQARCCQMmgICDgRKTRcwDeCQDnWCQHsEIALtZUALQKAKAneSCdkauIqIuAkINEEAItAEdm4KAu0QOLNVMdMA7eTEnUGgFgIQgVpIcx8QCISApgv0V8dy9Mv8AU0BaKMiNgUKJDCaAgJGBCACRnCpGgR6QUDEQC/2AuhFYrQTBMohABEohyU1gQAIgAAIgEB3CEAEuhMZDQYBEAABEACBcgj8P7GT+eDbq8WUAAAAAElFTkSuQmCC"

	@Suppress("LongMethod")
	fun generate(certificate: CertificateCredentialsTranslation): String {
		return createHTML().html {
			head {
				style {
					unsafe { raw("@page { size: 700px 450px; margin: 10px }") }
				}
			}
			body {
				div {
					withStyles(
						"text-align" to "center",
						"margin-bottom" to "20px"
					)
					p {
						withStyles(
							"color" to "#fcba03",
							"font-size" to "24px",
							"margin-bottom" to "0",
							"margin-top" to "0",
						)
						+certificate.title.value
					}
					span {
						withStyles(
							"font-size" to "16px",
						)
						+"Issued to ${certificate.holder.organization}"
					}
				}
				div {
					withStyles(
						"display" to "flex",
						"align-items" to "center"
					)
					img(src = "data:image/png;base64,$IMG_BASE64") {
						withStyles(
							"width" to "70",
							"height" to "70",
							"margin-left" to "40px"
						)
					}
					div {
						withStyles(
							"flex" to "1",
							"margin-left" to "30px"
						)
						table {
							tbody {
								field(certificate.protocol.session)
								field(certificate.protocol.channel)
								field(certificate.protocol.protocolEngineVersion)
								fields(certificate.payload)
							}
						}
					}
					img(src = "data:image/png;base64,${certificate.protocol.url.toQRCodeB64( width = 100, height = 100)}") {
						withStyles("margin-right" to "30px")
					}
				}
				div {
					withStyles(
						"display" to "flex",
						"margin-top" to "70px"
					)
					signer(certificate.issuer)
					signer(certificate.holder)
				}
			}
		}
	}

	private fun DIV.signer(signer: CertificateSignerTranslation) {
		div {
			withStyles(
				"flex" to "1",
				"text-align" to "center",
			)
			div { +signer.name.value }
			div { +(signer.roles ?: "") }
			div { +signer.organization }
		}
	}

	private fun TBODY.fields(data: List<CertificateDataTranslation>) {
		data.forEach { field(it) }
	}

	private fun TBODY.field(data: CertificateDataTranslation) {
		tr {
			td { strong { +"${data.label}:" } }
			td { +"${data.value} ${data.unit}".trim() }
		}
	}

	private fun String.toQRCodeB64(width: Int, height: Int): String {
		return QRCode.from(this).withSize(width, height).stream().use {
			Base64.getEncoder().encodeToString(it.toByteArray())
		}
	}
}