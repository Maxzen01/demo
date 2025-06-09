import { Product } from '../types';

export const products: Product[] = [
  // Mobile Accessories
  {
    id: 'ma-001',
    name: 'Premium Wireless Earbuds',
    description: 'Experience crystal-clear sound with our premium wireless earbuds. Features active noise cancellation and 24-hour battery life.',
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Battery Life': '24 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Noise Cancellation': 'Active',
      'Water Resistance': 'IPX7',
      'Warranty': '1 Year'
    },
    stock: 45,
    categoryId: 'mobile-accessories',
    slug: 'premium-wireless-earbuds',
    featured: true
  },
  {
    id: 'ma-002',
    name: 'Fast Charging Power Bank',
    description: 'Keep your devices powered with this 20,000mAh power bank featuring fast charging technology.',
    price: 49.99,
    rating: 4.5,
    images: [
      'https://openboxwale.in/public/uploads/products/1734923288_Ambrane%20100W%20Fast%20Charging%20Powerbank%201.jpg',
      'https://openboxwale.in/public/uploads/products/1734923288_Ambrane%20100W%20Fast%20Charging%20Powerbank%204.jpg'
    ],
    specifications: {
      'Capacity': '20,000mAh',
      'Input': 'USB-C, Micro USB',
      'Output': '2x USB-A, 1x USB-C',
      'Fast Charging': 'Yes',
      'Weight': '340g'
    },
    stock: 78,
    categoryId: 'mobile-accessories',
    slug: 'fast-charging-power-bank'
  },
  {
    id: 'ma-003',
    name: 'Tempered Glass Screen Protector',
    description: 'Protect your smartphone screen with our premium tempered glass that offers 9H hardness protection.',
    price: 15.99,
    discountPrice: 12.99,
    rating: 4.3,
    images: [
      'data:image/jpeg;base64,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'
    ],
    specifications: {
      'Thickness': '0.33mm',
      'Hardness': '9H',
      'Compatibility': 'Universal',
      'Features': 'Anti-fingerprint, Anti-scratch',
      'Pack': '2 pieces'
    },
    stock: 120,
    categoryId: 'mobile-accessories',
    slug: 'tempered-glass-screen-protector'
  },
  {
    id: 'ma-004',
    name: 'Adjustable Phone Stand',
    description: 'An elegant aluminum phone stand with adjustable viewing angles, perfect for video calls and media consumption.',
    price: 24.99,
    rating: 4.4,
    images: [
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUSExMQEhUSFRgVFhUXFx8XGhgVFRUWFhURFRMYHSggGB0lGxcXITEhJSsrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0mICMvMjcwMistLTUrKys1LTUuNy0tNysvNzctLSsrLTYvLy0rLy8tLy8tLSsrLS0tMC0rN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHBAIDCAH/xABKEAABAwICBQcGCggGAgMAAAABAAIDBBESIQUGBzFBEyIyUWFxgXJzkaGxshQjMzQ1QlJ0krMkQ4KDosHR0hclRGJjwlPwVIST/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAKBEBAAMAAQMCBQUBAAAAAAAAAAECEQMSITEiQQQUkdHwUXGBofET/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQERcelqsxQveAC4CzB9qRxwxs8Xlo8UEZX1tRK7BTObExryx0xjMxLwbPZGwODWhpyL3E5tcMOV1UdfNZJtFtiM9fVSOnLgxkVPAMmYcbi54sAMTR15q80NC+NrGNlOGMAWwAl1gL4nHO5IcSd93LvfG129oNt1wD7UGQal67TaSqhTx1GlGDC5zpMNLhaGjLEOQNrnLfvKuWkdF17GudFXaQc5vRMjaQx3Gd3tEbXFm+9iHdSt4aBuFlUdc4pI2zScqf0hjaWGPdh5T5WTpZuDBI7K3RXNpmMyExEJrVnSxqII3uDQ50bXkDgXNBc0t4EE2UuqjqDSuAlkcAMxGLbjbnEgcN4y7OKty6QIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAovSPxk8MXBl539Rwc2Jju97sY7YVKKFoKlpfNMXNGN5jZc2PJwEs3H/l5Yg8QQg6XCqxG3IBt8ibl2HgbWte2a8Ays+1T5k8HZDO1vV6O1UbTW1ENq/gtKxkgY4tkleThu3pNYGncN2I+jirxo7S8csTJC5jS9ocWlwyJF7Fc9UbjvotmvN8VUd0kQ3fVPVmR49d96rGuc+Opjj3tpozIfOS3a0g8C1jXjumVtjrI3GwkYT1BwPeqVoQfCp+W3iplM1/+EACHuvE2O/aSpc4uehKTkoGM42u7ynZu9ZXciKUCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg49MVRihe9ti+2FgO4yPIZG097y0eKpGtFDDFC6SxeaaERx3z+TFgT1867iVZtYaqz2N4RNdUO6rt+LhY4dr3lw7YVn9TpGQ4mBxJIseNgd5N+J3LL8TeYyIavhuPqmZUrVHQ0gdypa44nlguN5k3HF1C4z6+5ajJqlRm2JgJsASSc8u9cFBTNhgYMyXOxuv35ADhnb0Lpm0lc2B3H2dawxe02mdbr0rkVx7J9DU9NDK+FoZJMBTNcMiOWNnuaetrA537Kn9UKWwdJa31G9gyJHowjwUHXgvkhi4QxGZ4I3yVF2R2PW2NsgI/wCVq7dm2mHVDanO7GT/ABR/2FoGR6jhxftr0+KJisa8vkmJtOLmiIrVYiIgIiICIiAijdO6fpaNgkqZmQtcbNxbyd9mtFyfBV9+1PQw/wBYz8D/AO1BckVHdta0KP8AVjwjkP8A1Xqdth0L/wDJce6GT+xBfUVB/wAYNEcJZj3Qv/mF+Ha/ovgao90LkF/RUAbW9HndHXO7qc/1XkNqtKejS6Ud3Ux/qgvqKgnajFw0fpg91Mf6r8/xPB3aL00f/rH+5Bf0UXq7p6Csi5WEusHFj2PbhfHI3pRyMObXC49IUogIiICIuHTdWYoHvbbHbDHfcZXkMjB7MbmoK1pdksokfGx7+VmwAgboqe7GtPYZDK4djgs/1q0uaKZkXJsMsjeUwyyCFuBtw273cS7cOxajBpCOnayANlIia1gtHI+4AABxNacR3XzvvXJpVlDUEPqKNs5bzWOfSvkIbvNrxkgX4dqovwVvbbL6c9qV6ass0RrfUVFTBTCnhcZSWjkp2yloaC5zyGXsBvztuyV7j0DO6VjeSe1heMTjuDR0jv6rqa0ZDQU7nOpqNsLsNi6OkewnMc3EI939E1h0yXUrmsxsdOeQabFjm8pzXSNDwDdrMb931Fz8rx7sOvmeTMlU9N6VtS1FW02dUuJiI6pMMVO4DzYjce4qz7KtH8lQMdaxmc6T9noM/hYD4rOtoVZz4aZtgI2mZw4A2MUQ7s5D+yFsmrr4TSwcg7HCImCN1iLta0AGxz4cVohnlIoiKUCIiAiIgIiIMy2vsEclFVPax8cEzHPDmggsEgbIHX3819x2tV7foukY0v8Ag8FgL82JpJHY1rbnwUVtG0WKihlafqi/cCCx58GuJ8E2a6UNRo2ne6/KMZyMl9/KQkxuJt14b+KDs0VPBI9zG04jwgEYosNx3OaLbx6VLCmj+wz8IXnhF72F+vj3XXkg8BE0bgB4LxLX52c0Z5c05DqPOz9S9Gl5JWwvdFbGALXaX2FxiIYCC4htyBfMgBVqv0jpI81kREjXSAERnk3tsImSucTYAPLn4L3LQ055oLa5rs+cButlu6+Oa82g2zN+1VVlZXuexrRJgOMGR8IBBDW8k57bjIvkwuDf/CXDC0qb0BUySQNfKML3Oku37IEjw1lxvs0AX42ug981O82tK5vgDx7l0BfqIKVQ/o2m5o8xHpGnbO3q5en+LlaO0sLHFXVUrac0xR02kG79H1LJHG2fISnkp2j9lwPgro1wIuMwcwg/UREBVjXDSoidELB+D43DfpPN2QsI353kf+4VnWYa0aShfM7G+MEuLmhxsRHHiiZbMZXEzweqZV8tprSZr5dUr1TjqfrrJc/o9OLG3OeQe0nLILsp9aZy1x5CnFhc2fcdnO3HwVPfPSs5z+RtvJuDfqyubheFbp+hZAXgseGnos6QLrgAMcRYZepYItzzHeZ/r7LZ4e/aVqm15cwHFFBite2M2APFzrZD0k8AvQ/TQrHQPDQ1rGOly3OdI50UbwfJjkyzylaeKyCfSzqmRkDGMAllYGsdJcule4NDpMIz3gWyHYr9pbSTaejqKhmWIWit1YWw0xA4cxsZIGVwVs4ovEeqdReK1jI8qlpGs5eoqJr3DnOYzyIGljbdhcHO8VuWzU/5XSeZHtK+d6Q4HshH1IHk94ba/rcvofZqP8rpPND2lXqVmREQEREBERAREQeuohD2uY4Xa9paR2EWIWdbMJDBWV9A77bapnbi+KmP42N9K0lZprP+iaao6rcyd3weQ9lQMLbnslY0/tINLREQFCaWqqSKRjJi8OqDZvOfhvdosbGzQSR6VNrNNqWtj6aaKnNFFNitJFNK7mYhvAaG3uDa4uMiOtTETM5Dqk0ifX4XeqipmNvJhYMzz3kC/EXcbFSFPM17WvaQ5rgC0g3BB3EOGRHasM03LVVoiqXuZUPcCxzIIi3ksJxBjm4nON8RNzwV82ezVsUfJVDGCFotESSJRxLXMtbDnkSQeFlr5fhqU4Yv1+re9fePzFNLXtM7XK+0+0/svaL8BX6saxxaa0c2op5qd/RmjfGewPaRcdovdQezTSLptHxCT5WnxU0o4iSB3Jm/eAD4q0qk6A/RtL1tLuZWMZXRDhjHxVR4khhQXZERBwadq3RQPcy2MgMjvu5WRwjiB7Mbm3WY6T2buqJ5XtrHRhmFjRyJyDWBrW4+UGOzQ25tvUrtY1wkpJKaGJjHlx5Z+K+XJvbybQQRvOK/cvVo3X+LE+F1O4SsscMZaWuJGZzIcM+IDkEP/hRKbg1sbhlYGmPp+WXl/hNiBaaiJzb5fFOFjlex5Q5b/SrA7XYj/R1PhHM71sgK5q3aVTxBuKCpxOvibhcwtzsLCZrC644gcCFGJ2Vaqdn4oXGpbLGQC6KNkcWF+KVpZjxlxxcm1zpLAb4h4wevekGvNNTMItczPAysI7tY0t4Z4sj9kK6Vus9LVyua6RsDaduJrZCAcRHPlcb5YWgsFvtPvvCzOklNdXSytuWWIZfhDCwvcT1XDb97kH5PTYKoA7/grye8gG3rX0Ds2+jKTzI9pWH6abesceqmf7Atx2b/AEZSeZb/ADUoWRERAREQEREBERAVI2u6KM1C5zL44uc0jeHCz2kHrxMaPFXdc2k6blIns+002797fXZBzataUFVSQVI/XRMeexxaMTfA3HgpJZ/sgqcMNTQnfRVDsA6oZ7yxesvHgrbrG6RsDnRuLXMIdlxG4g5Hrv4Kaxs45vbprM/ok1xaV0RT1LWtnijmaxwe0PaHAOG51j3qhz6amAHx8jiLYwHYbF3G191rW7116F01K6J/KSOc6J+EkHPk5W4mOI3XBEgv2BX14Oqk3rO5KKzaZiJjNWGDVKjZMZ2RmN+HCOTkkjbbiOSY8M4DgppkTRuAH/vWqlLU3Y6bGXlovlcNtk5rWi+8ixPepQMJY0nM4QD2uAsf/e1Z+rbzFvqu5eK1K7Xum7hfhkHWPSqzS1bC67SLsdZw4gje0jguqpDi9zRdoABDh1knLPsXURWYiazusn/W+zFoyY86nGyA7iD3FUvaJ8RLQ6RGQpagRSncPg9VaN5Pc7AfSprRtRhlDCb4m2v1kfz/AKr3606JFXRz0x/XROaOx1uY7wdY+Ci0ZKzivNq7KVRV3Z9pc1Wj6eV1+UwcnJfeJYvi5LjgcTSfFWJQsRendAU9W3DMwEi+F4yc2+/Cf5G47Flusmx+aRxMMkVx0X3LD3FoBt3g+C2ZEHz3UbNNOsIMb3PwgWPLNJvxLS8iwvwX7BqrpoO/SqSSpG7FjYXttuwuY/Mdh9K+g0QfOOn9n9VJeQU1U4nMgsJeD2OAN+4+tT2zbVOWno66omikjIppY4xIwscbtcZHYHZgZMAPHNbgorWv5lU+Yk9woMF0k29RMeqld/1W17Ofoyk8y1YtW/LVH3U+1q2rZ19GUfmG+xBY0REBERAREQEREBERBmtN+h6fDd0dfE+Ps5SP46M/hL2juWjzxBzXNO5wIPcRZZ7tgp3Rxw10Yu+jlZN1X5J1y2/UWOkutApp2yMbIw3a9oc09bXC4PoKE92P6yRyBzISG9Jwa7PECDhLBbcMl26u0eG8ZfJarY6M4hZ12jG0DquGlueYxK4ab1cp5Zg97pAcQcACAL+JzzF1002rMOJsh5XExwLcRbvBBByvxCv4rRTrnqnbf7/OM8zy+isR2r28+fsg55mgRlxwsfJkzgRazMvAfiUxouUHlGXuQce/rydbsHN9K86nR1OH2cHCxyLnkADM2BtYDO1l0wUtPHzjybDYgEybwcze9uxZsnXqTz0mud9RNTohhqPhN+fgLN1rtJBs7r3BdzsVmOBOV2OHduPf0V4u0xSN+Umo47fbnb/cueq1x0YyJ721dI8RgOeYzy1gSG3LYsR3ld1nIz2Yealbz1R5zHh8KJc1zA7I3NwRuvbvzVqjdcAjiL+lUaHaZom2N9VEGm9gIZbkjfZpjvbwX67a3ocdGeR3kwS/zYFM21Xx8XRM54/Pv9Meep5+DaR0hQnJsj218Iv9SfmzADgBKP4ld1lTNbIK3TFBJRNncWtminc6MsbyDmhzSSc8ntv49q1VcrhERAREQFCa5zBtFOD+sYYm8OfLzG3J3C5Gam1V9pPzF3D42H85iDHJYnOmqw0A8nT4Xc5u8ubaxvztx3LY9mVUx+jKbCb8nGI3dj2jnDtWMUvylde1+TG4WzxZm3BansU+jGedk9oQXxERAREQEREBERAREQR2ntER1ULoZL4XWORtu4dxFwewlZxBqXp+Jogg0iI4I+bE0uDi2MdFuPkr5DLwWsIg+fNZ3aTpJXwzaSrXuZEJSY5i0EONsI5ozVPn09Ul+DltIyeVVPtnuyC0Da98/n+5s99RWh6dhjpnFjS4zRMJIzLDI0Fp7LEoIGop2vbDLLYOhYA9z3lzpCHFwsGtuDw3kqDmqWFziyhYbuJBeZDe5vcgOAC+sGaAoxupqYfum/0XXFRRN6Mcbe5oHsCD5Lp/hDsmUNN4Rvd4WxnNW/VfVSudjL4C34RHyWBsAFmk36RFmHtOY7F9GAIgo+quzqmgjtO1k7zawcBZgz5rSAMVycyVY4tW6Ju6mp//AMwfaFKog9FNRxx9CNjL78LQ302XvREBERAREQFVtpR/QT56D85itKqm0z5ifPQfnMQY5S/KV3mx7y1PYr9GM85J7VllL8pXebHvLVNi/wBGM85J7yC9IiICIiAiIgIiICIiAiIgw3a98/m+5t99Ruhfkab7xF+a1Se1/wCfy/c2++ozQvyFN94i/Mag+hEREBERAREQEREBERAREQFVNpvzE+eg/NarWqntN+ZfvofzWoMdpenXeQPeWq7GPouPzknvLKaXp13kD3lq2xn6Lj85J75QXlERAREQEREBERAREQEREGHbYPn8n3NvvlRehvkKf7xF+Y1Su2D5/J9zb75UVof5Cn+8RfmNQfQqIiAiIgIiICIiAiIgIiICqe075l+/h/MarYqltO+Zfv4fzAgx2m6db5A95avsa+i4/Lk98rKKbpVvkD3lrGxv6Li8uT3ygu6IiAiIgIiICIiAiIgIiIMP2wfP3/c2++VF6KHxEHn4vzGqV2w/P3fcx75UVo53xEHn4/zGoPoRERAREQEREBERAREQEREBVLaf8yHn4fzAraqjtP8AmQ8/D74QY9T9Kt8ge8tZ2OfRcXlyfmFZPT763yR7StZ2O/RcPlSfmOQXVERAREQEREBERAUVprWCnpS0SuOJ4Ja0C5IFrkcOIUqqdtG1KZpGNhwsMsN8OK4u11rtxA5ZgFB5Ta+R/Uhkd5RDfZdccmvcp6MMbe9xd7LLNanUGugzbHXx2/8AE/lW/hYXFR8hr4jYzi/2Z4sB/kUwe/aFpt81W98gaCaYMGEG2TieJKiaTSxMUbGg3EjHX6rOBuvDSbaqXnSRRvNrXifbLyX/ANU0Bo175BGWyRZ9J7CG/iFwg1g60Vm/lz+Fn9q9sOt1YN72u8pg/wCoCq2knvp2i7XzdsbSR+I5KKOs1RubTkDrdIB6gEGn0+u8v14mO8klvtupCDXeE9KOVvdZw9o9ixp+m613CnaO3E4+Odl6JNJVXGojZ3Rt9pzTJG+Qa0Ujv1uE/wC5pb6yLKTpquOTNj2P8lwd7F84xfCpOjNVS9kTSfUwFatst1fnga+aflg6QBrWynnYb3JLSLtztkc96C/IiICLnmr4WdKWJvlOA9pXHLrFSN3zxnyed7oKCURV+XXKkG5z3dzD/wBrLjl16hHRilPfZv8AMoLYqjtP+Zjz8Pvrmk17d9WBo7339QaFWdfNbXy0wa5jGjlojcE8HX4oKfS5ms8ke0rWdkA/yuHypfzXLHdEVbXfCzcZtHHtK0XZhrXDFQRxvbIbPl5zQCM5XHrug1FFCQa10bv1uE/7mlvrIt61KU1ZHILxyRvH+1wd7EHvREQEREBERAREQF4SxNcLOAcOoi49BXmiCEq9UqCTpU0IJ4tGA+llioqTZ1R3vG+ph8l4d+Y1yuCIKdNs9hf06mtcOq8Q9kN1+xbNtHDpMmf5Uzx6mEK4Imivw6k6NbupIXeWMfvkqTptE00fycEDPJja32BdqICIiAsk2nwVkdXyjJ7QytbhY9mJgc0Wc0OvkTv8Vra8JYmuGFzWuB3gi49BQfPbNJ1jd8dNIP8Aa4sP8QsvYNYSPlKaob5NpB/CVs9VqjQSb6aJvawcn7hCiKrZxSu6ElRF2BwcP4mk+tOwzWLWmkJwl7Wnqe0sP8lIQVDJPkyH+QcXsVirdmcpBw1EUg4NkjLfS4F3sUfQ6gVdO/EyCAnrikw+8GpgjXyW35d+SgdZapj48Aew53tiHDxVz0xqTVVFsVML9bpW2/hcuWl2T1H1hRsHe559BZb1pgylsAAcC9gxdpPsBVm0NpdkMTYwyaS32WZZ9pWk0myu3Sqmjsjhw/xF59ik6fZnSDpS1Mne5rR/CwH1oMtdp6U9Gmd3ueG+qy86GtqXysGCFgLgN7i7M8COK2CDUTRzf1GLynvd6i6ylaLQdLEbxU8EZH1mxtB/Fa6D36Ojc2JjXEkhoBuSTu4k5k9q6URAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z'
    ],
    specifications: {
      'Material': 'Aluminum Alloy',
      'Adjustable Angles': '0-270°',
      'Compatibility': 'Universal',
      'Color': 'Space Gray',
      'Anti-slip': 'Silicone Pads'
    },
    stock: 65,
    categoryId: 'mobile-accessories',
    slug: 'adjustable-phone-stand'
  },
  {
    id: 'ma-005',
    name: 'Premium Phone Case',
    description: 'Stylish and protective phone case made with premium materials for ultimate protection.',
    price: 29.99,
    discountPrice: 24.99,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4526400/pexels-photo-4526400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Material': 'Polycarbonate + TPU',
      'Protection': 'Military-grade drop protection',
      'Features': 'Wireless charging compatible',
      'Models': 'iPhone, Samsung, Google',
      'Warranty': '2 Years'
    },
    stock: 95,
    categoryId: 'mobile-accessories',
    slug: 'premium-phone-case'
  },
  // Extra Mobile Accessories
{
  id: 'ma-006',
  name: 'Magnetic Wireless Charger Pad',
  description: '15W fast wireless charger compatible with MagSafe devices, anti-slip surface, LED indicator.',
  price: 39.99,
  discountPrice: 29.99,
  rating: 4.6,
  images: [
    'https://vaku.in/cdn/shop/files/nexfold_pdpartboard_1_1024x1024.jpg?v=1742289257'
  ],
  specifications: {
    'Output': '15W/10W/7.5W',
    'Compatibility': 'Qi / MagSafe',
    'Connector': 'USB‑C',
    'LED Indicator': 'Blue',
    'Warranty': '1 Year'
  },
  stock: 85,
  categoryId: 'mobile-accessories',
  slug: 'magnetic-wireless-charger-pad'
},
{
  id: 'ma-007',
  name: 'Bluetooth Car Charger FM Transmitter',
  description: 'Hands-free car charger with dual USB ports and FM transmitter, supports TF card & AUX.',
  price: 24.99,
  rating: 4.4,
  images: [
    'https://m.media-amazon.com/images/I/71IvnxI2LTL._SX569_.jpg'
  ],
  specifications: {
    'USB Ports': '2x 5V/2.4A',
    'FM Range': '88.0–108.0MHz',
    'Supports': 'AUX, TF card, Bluetooth',
    'Mic': 'Built-in',
    'Voltage': '12‑24V'
  },
  stock: 60,
  categoryId: 'mobile-accessories',
  slug: 'bluetooth-car-charger-fm-transmitter'
},
{
  id: 'ma-008',
  name: 'Retractable Lightning Cable',
  description: 'Portable 3‑in‑1 retractable cable with Lightning, USB-C, and Micro USB connectors.',
  price: 19.99,
  discountPrice: 14.99,
  rating: 4.2,
  images: [
    'https://m.media-amazon.com/images/I/51JEV+k28+L._SX569_.jpg'
  ],
  specifications: {
    'Length': '1.2m retractable',
    'Connectors': 'Lightning, USB-C, Micro‑USB',
    'Material': 'TPE',
    'Color Options': 'Black, White',
    'Durability': '≥10,000 bends'
  },
  stock: 150,
  categoryId: 'mobile-accessories',
  slug: 'retractable-3-in-1-charging-cable'
},
{
  id: 'ma-009',
  name: 'Portable Mini Speaker',
  description: 'Waterproof Bluetooth mini speaker with 12-hour battery life and built-in microphone.',
  price: 49.99,
  rating: 4.5,
  images: [
    'https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc31b2ad2/JBL_GO_4_HERO_BLUE_48170_x6.png?sw=535&sh=535'
  ],
  specifications: {
    'Battery Life': '12 hours',
    'Waterproof Level': 'IPX6',
    'Connectivity': 'Bluetooth 5.0',
    'Mic': 'Hands-free calling',
    'Weight': '300g'
  },
  stock: 40,
  categoryId: 'mobile-accessories',
  slug: 'portable-mini-bluetooth-speaker'
},
{
  id: 'ma-010',
  name: 'USB-C to HDMI Adapter',
  description: '4K USB-C to HDMI adapter, plug-and-play, compatible with laptops and phones.',
  price: 34.99,
  rating: 4.3,
  images: [
    'https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/001/199/928/MFG_CDP2HD4K60_sml%28200x200%29.jpg'
  ],
  specifications: {
    'Resolution': 'Up to 4K@30Hz',
    'Connector': 'USB‑C male to HDMI female',
    'Compatibility': 'USB-C DP Alt Mode',
    'Cable Length': '15cm',
    'Warranty': '1 Year'
  },
  stock: 70,
  categoryId: 'mobile-accessories',
  slug: 'usb-c-to-hdmi-adapter'
},
{
  id: 'ma-011',
  name: 'Adjustable Car Phone Mount',
  description: '360° rotating air vent phone mount, one-touch locking and release system.',
  price: 22.99,
  rating: 4.6,
  images: [
    'https://m.media-amazon.com/images/I/81D75XKZHiL._SX679_.jpg'
  ],
  specifications: {
    'Rotation': '360°',
    'Clamp Width': '55–85mm',
    'Mounting': 'Air Vent Clip',
    'Release': 'One-touch',
    'Material': 'ABS + Silicone'
  },
  stock: 120,
  categoryId: 'mobile-accessories',
  slug: 'adjustable-car-phone-mount'
},
{
  id: 'ma-012',
  name: 'Smart Stylus Pen',
  description: 'Precision stylus pen with palm rejection and magnetic attach for phone/tablet.',
  price: 59.99,
  discountPrice: 49.99,
  rating: 4.7,
  images: [
    'https://dailusretail.com/cdn/shop/files/Digital_Stylus_Pen_f_143ce04abf1f0d2ff933b237d5ea399b.jpg?v=1749376205&width=713'
  ],
  specifications: {
    'Tip': '1.0mm fiber',
    'Features': 'Palm rejection, auto sleep',
    'Battery Life': '10 hours',
    'Charging': 'USB-C',
    'Compatibility': 'iPad, Android'
  },
  stock: 55,
  categoryId: 'mobile-accessories',
  slug: 'smart-precision-stylus-pen'
},
{
  id: 'ma-013',
  name: 'Foldable Bluetooth Keyboard',
  description: 'Ultra-slim foldable Bluetooth keyboard for tablets and smartphones.',
  price: 69.99,
  rating: 4.5,
  images: [
    'https://m.media-amazon.com/images/I/61MF3pVdO3L.jpg'
  ],
  specifications: {
    'Layout': 'QWERTY full-size',
    'Connectivity': 'Bluetooth 5.1',
    'Battery': 'Rechargeable Li-ion',
    'Material': 'Aluminum shell',
    'Compatibility': 'iOS, Android, Windows'
  },
  stock: 30,
  categoryId: 'mobile-accessories',
  slug: 'foldable-bluetooth-keyboard'
},
{
  id: 'ma-014',
  name: 'USB-C Hub with SD Reader',
  description: '6-in-1 USB-C hub: HDMI, USB-A, PD charging, SD/microSD slot.',
  price: 49.99,
  rating: 4.4,
  images: [
    'https://m.media-amazon.com/images/I/61VyVSOQvaL.jpg'
  ],
  specifications: {
    'Ports': 'HDMI, 2x USB-A, USB-C PD, SD, microSD',
    'HDMI Output': '4K@30Hz',
    'Power Delivery': '60W',
    'Cable': '20cm USB-C',
    'Material': 'Aluminum'
  },
  stock: 45,
  categoryId: 'mobile-accessories',
  slug: 'usb-c-hub-with-sd-reader'
},
{
  id: 'ma-015',
  name: 'Gaming Finger Sleeve (Pack of 4)',
  description: 'Anti-sweat conductive gaming finger sleeve for mobile FPS games.',
  price: 9.99,
  rating: 4.3,
  images: [
    'https://m.media-amazon.com/images/I/61qTfov7j0L._SX569_.jpg'
  ],
  specifications: {
    'Color': 'Black',
    'Material': 'Microfiber + conductive mesh',
    'Pack Size': '4 pieces',
    'Feature': 'Sweat-resistant',
    'Size': 'Universal'
  },
  stock: 200,
  categoryId: 'mobile-accessories',
  slug: 'gaming-finger-sleeve-pack'
},
{
  id: 'ma-016',
  name: 'Portable Phone UV Sanitizer',
  description: 'Compact UV LED sanitizer with wireless charging pad inside.',
  price: 59.99,
  rating: 4.2,
  images: [
    'https://m.media-amazon.com/images/I/51MEMMXu+cL._SX679_.jpg'
  ],
  specifications: {
    'UV LED': '254nm',
    'Charger': '10W Qi',
    'Timer': '3 min cycle',
    'Interior': 'Sterilize up to 99.9%',
    'Size': 'Fits phones up to 6.7"'
  },
  stock: 50,
  categoryId: 'mobile-accessories',
  slug: 'portable-uv-sanitizer-phone'
},
{
  id: 'ma-017',
  name: 'Lens Clip-on Camera Kit',
  description: 'Universal clip-on lens kit: Wide, Macro, Telephoto + cleaning cloth.',
  price: 29.99,
  discountPrice: 24.99,
  rating: 4.5,
  images: [
    'https://m.media-amazon.com/images/I/81V6zqNfhYL._SX679_.jpg'
  ],
  specifications: {
    'Lenses': '0.63x Wide, 15x Macro, 2x Telephoto',
    'Clip': 'Universal',
    'Bag Included': 'Yes',
    'Cleaning Cloth': 'Microfiber',
    'Warranty': '6 Months'
  },
  stock: 80,
  categoryId: 'mobile-accessories',
  slug: 'clip-on-lens-camera-kit'
},
{
  id: 'ma-018',
  name: 'Wireless Car Vent Charger (2-in-1)',
  description: 'Fast wireless charger integrated in car vent mount, 15W output.',
  price: 44.99,
  rating: 4.4,
  images: [
    'https://m.media-amazon.com/images/I/61PiCYIjYyL._SX569_.jpg'
  ],
  specifications: {
    'Wireless Output': '15W',
    'Mount': 'Air Vent clip',
    'Rotation': '360°',
    'Face Detection': 'Infrared sensor',
    'Compatibility': 'Qi devices'
  },
  stock: 70,
  categoryId: 'mobile-accessories',
  slug: 'wireless-vent-charger-car'
},
{
  id: 'ma-019',
  name: 'USB-C OTG Flash Drive (128GB)',
  description: 'Dual-interface flash drive with USB-C and USB-A connectors.',
  price: 24.99,
  rating: 4.6,
  images: [
    'https://m.media-amazon.com/images/I/61pq9MKVvcL._SX569_.jpg'
  ],
  specifications: {
    'Capacity': '128 GB',
    'Connectors': 'USB‑C & USB‑A',
    'Read Speed': 'Up to 100 MB/s',
    'Encryption': 'AES-256 options',
    'Warranty': '1 Year'
  },
  stock: 100,
  categoryId: 'mobile-accessories',
  slug: 'usb-c-otg-flash-drive-128gb'
},
{
  id: 'ma-020',
  name: 'Neckband Bluetooth Earphones',
  description: 'Neckband-style Bluetooth earphones with bass boost and 16h battery life.',
  price: 59.99,
  rating: 4.5,
  images: [
    'https://m.media-amazon.com/images/I/41GnWg6R2rL.jpg'
  ],
  specifications: {
    'Battery Life': '16 hours',
    'Connectivity': 'Bluetooth 5.2',
    'Features': 'Bass boost, voice assistant',
    'Standby': '400 hours',
    'Warranty': '1 Year'
  },
  stock: 90,
  categoryId: 'mobile-accessories',
  slug: 'neckband-bluetooth-earphones'
},

  

  // Branded Mobiles
  {
    id: 'bm-001',
    name: 'UltraPhone 15 Pro',
    description: 'The latest flagship smartphone with cutting-edge features and exceptional camera performance.',
    price: 1099.99,
    discountPrice: 999.99,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Display': '6.7" OLED 120Hz',
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': 'Triple 50MP + 12MP + 10MP',
      'Battery': '5000mAh',
      'OS': 'Android 14'
    },
    stock: 35,
    categoryId: 'branded-mobiles',
    slug: 'ultraphone-15-pro',
    featured: true
  },
  {
    id: 'bm-002',
    name: 'XPhone 14',
    description: 'Premium smartphone with stunning display and all-day battery life.',
    price: 899.99,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A16 Bionic',
      'RAM': '6GB',
      'Storage': '128GB',
      'Camera': 'Dual 12MP',
      'Battery': 'Up to 19 hours',
      'OS': 'iOS 16'
    },
    stock: 42,
    categoryId: 'branded-mobiles',
    slug: 'xphone-14'
  },
  {
    id: 'bm-003',
    name: 'Galaxy Ultra S24',
    description: 'Revolutionary smartphone with AI capabilities and professional-grade camera system.',
    price: 1199.99,
    discountPrice: 1099.99,
    rating: 4.8,
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpjCud5vf-xrA65IvmjpwCn3Br-nzGF7cnTqRwvNeYTJB2GCWkO7xT1LTFavEZaB7_qCZaltK6P_zYCp04pwCQjjytxiGURk62ED9NUuSO_KpBAIlee1C08w',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWck6irE_9VyDk-8Cw-rb1DBrtI4Jvt3LDZO6LnY60G7fZiavuqXE5pwPALA2Kkslfcb9LcH2ihj8FVxXtyPjzfrJ_8FGJorn8WwxcOrM69KIJXBwlHyO6'
    ],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Exynos 2200',
      'RAM': '12GB',
      'Storage': '512GB',
      'Camera': 'Quad 108MP + 12MP + 10MP + 10MP',
      'Battery': '5000mAh',
      'OS': 'Android 14'
    },
    stock: 28,
    categoryId: 'branded-mobiles',
    slug: 'galaxy-ultra-s24'
  },
  {
    id: 'bm-004',
    name: 'Pixel 8 Pro',
    description: 'The most advanced Pixel phone with exceptional camera capabilities and pure Android experience.',
    price: 899.99,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Display': '6.7" QHD+ LTPO OLED',
      'Processor': 'Google Tensor G3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': 'Triple 50MP + 48MP + 12MP',
      'Battery': '4950mAh',
      'OS': 'Android 14'
    },
    stock: 38,
    categoryId: 'branded-mobiles',
    slug: 'pixel-8-pro'
  },
  {
    id: 'bm-005',
    name: 'OnePlus 12',
    description: 'Flagship killer with lightning-fast performance and incredible display quality.',
    price: 799.99,
    discountPrice: 749.99,
    rating: 4.7,
    images: [
      'https://m.media-amazon.com/images/I/71YzJwmRFCL._SX569_.jpg'
    ],
    specifications: {
      'Display': '6.7" AMOLED LTPO 120Hz',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '16GB',
      'Storage': '256GB',
      'Camera': 'Triple 50MP + 48MP + 32MP',
      'Battery': '5500mAh',
      'OS': 'OxygenOS 14'
    },
    stock: 45,
    categoryId: 'branded-mobiles',
    slug: 'oneplus-12'
  },
  {
  id: 'bm-006',
  name: 'Moto Edge 50 Ultra',
  description: 'Premium design with a powerful camera system and curved OLED display.',
  price: 699.99,
  discountPrice: 649.99,
  rating: 4.5,
  images: [
    'https://m.media-amazon.com/images/I/71m+dNHzoGL._SX679_.jpg'
  ],
  specifications: {
    'Display': '6.7" pOLED 144Hz',
    'Processor': 'Snapdragon 8 Gen 3',
    'RAM': '12GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 50MP + 64MP',
    'Battery': '4500mAh',
    'OS': 'Android 14'
  },
  stock: 25,
  categoryId: 'branded-mobiles',
  slug: 'moto-edge-50-ultra'
},
{
  id: 'bm-007',
  name: 'Realme GT 5 Pro',
  description: 'Power-packed flagship phone with excellent performance and design.',
  price: 749.99,
  rating: 4.4,
  images: [
    'https://images-cdn.ubuy.co.in/659e8f2b02f8a52c11157ef1-oppo-realme-gt5-pro-5g-smartphone.jpg'
  ],
  specifications: {
    'Display': '6.78" AMOLED 144Hz',
    'Processor': 'Snapdragon 8 Gen 3',
    'RAM': '16GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 50MP + 8MP',
    'Battery': '5400mAh',
    'OS': 'Android 14'
  },
  stock: 30,
  categoryId: 'branded-mobiles',
  slug: 'realme-gt-5-pro'
},
{
  id: 'bm-008',
  name: 'Vivo X100 Pro',
  description: 'Elegant design with ZEISS optics and stunning camera features.',
  price: 899.99,
  discountPrice: 849.99,
  rating: 4.6,
  images: [
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2tBFrz5T8dIgFb0b47p0PvuyjIrXRUZNSoFFOHnVqmdx_hjuoKUGLq4ZZ_WNsgC78rSVsk0KynXd9s9JGf9aDKaWiLRf3B4aCb-Pq7EY&usqp=CAc'
  ],
  specifications: {
    'Display': '6.78" AMOLED 120Hz',
    'Processor': 'MediaTek Dimensity 9300',
    'RAM': '16GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 50MP + 64MP',
    'Battery': '5400mAh',
    'OS': 'Android 14'
  },
  stock: 20,
  categoryId: 'branded-mobiles',
  slug: 'vivo-x100-pro'
},
{
  id: 'bm-009',
  name: 'Nothing Phone (2)',
  description: 'Unique transparent design with clean Android experience.',
  price: 599.99,
  rating: 4.5,
  images: [
    'https://img5.gadgetsnow.com/gd/images/products/additional/large/G454297_View_1/mobiles/smartphones/nothing-phone-2-512-gb-white-12-gb-ram-.jpg'
  ],
  specifications: {
    'Display': '6.7" OLED 120Hz',
    'Processor': 'Snapdragon 8+ Gen 1',
    'RAM': '12GB',
    'Storage': '256GB',
    'Camera': 'Dual 50MP + 50MP',
    'Battery': '4700mAh',
    'OS': 'Android 14'
  },
  stock: 34,
  categoryId: 'branded-mobiles',
  slug: 'nothing-phone-2'
},
{
  id: 'bm-010',
  name: 'iQOO 12 5G',
  description: 'High-performance gaming smartphone with immersive display.',
  price: 649.99,
  discountPrice: 619.99,
  rating: 4.6,
  images: [
    'https://m.media-amazon.com/images/I/619lW2YtVhL._SX679_.jpg'
  ],
  specifications: {
    'Display': '6.78" AMOLED 144Hz',
    'Processor': 'Snapdragon 8 Gen 3',
    'RAM': '16GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 50MP + 64MP',
    'Battery': '5000mAh',
    'OS': 'Android 14'
  },
  stock: 29,
  categoryId: 'branded-mobiles',
  slug: 'iqoo-12-5g'
},
{
  id: 'bm-011',
  name: 'ASUS ROG Phone 7',
  description: 'Ultimate gaming phone with cooling system and high-refresh display.',
  price: 999.99,
  rating: 4.7,
  images: [
    'https://www.triveniworld.com/cdn/shop/products/asus-rog-7-5g-dual-sim-512gb-phantom-black-16gb-ram-refurbished-triveni-world-1.jpg?v=1736283231&width=1100'
  ],
  specifications: {
    'Display': '6.78" AMOLED 165Hz',
    'Processor': 'Snapdragon 8 Gen 2',
    'RAM': '16GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 13MP + 5MP',
    'Battery': '6000mAh',
    'OS': 'Android 13'
  },
  stock: 19,
  categoryId: 'branded-mobiles',
  slug: 'rog-phone-7'
},
{
  id: 'bm-012',
  name: 'Xiaomi 14 Ultra',
  description: 'Flagship photography phone with Leica lenses and sleek design.',
  price: 949.99,
  rating: 4.6,
  images: [
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLB2sYUXJlfA-CO6oJQ1QFGqvVnLva6jAhDTzNQ87cQeLOGK_7hnpKLEm8RCrAXLJMxgNwEWxedLC_nmDpPbJPE4_-UypGEW-trKjUapVRvGw8v5Doxxg6ODNnseIEf3cYfkl8lmVlKg&usqp=CAc'
  ],
  specifications: {
    'Display': '6.73" AMOLED 120Hz',
    'Processor': 'Snapdragon 8 Gen 3',
    'RAM': '12GB',
    'Storage': '512GB',
    'Camera': 'Quad 50MP',
    'Battery': '5300mAh',
    'OS': 'Android 14'
  },
  stock: 24,
  categoryId: 'branded-mobiles',
  slug: 'xiaomi-14-ultra'
},
{
  id: 'bm-013',
  name: 'Honor Magic6 Pro',
  description: 'AI-powered features with futuristic design and incredible zoom.',
  price: 1099.99,
  discountPrice: 999.99,
  rating: 4.5,
  images: [
    'https://pmcjewellery.co.za/cdn/shop/files/EDA006183202C.jpg?v=1715603057&width=713'
  ],
  specifications: {
    'Display': '6.8" OLED 120Hz',
    'Processor': 'Snapdragon 8 Gen 3',
    'RAM': '12GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 50MP + 180MP',
    'Battery': '5600mAh',
    'OS': 'Android 14'
  },
  stock: 21,
  categoryId: 'branded-mobiles',
  slug: 'honor-magic6-pro'
},
{
  id: 'bm-014',
  name: 'Sony Xperia 1 V',
  description: 'Professional-grade camera phone with 4K OLED display and cinematic quality.',
  price: 1199.99,
  rating: 4.4,
  images: [
    'https://unboxyourmobile.com/image/cache/catalog/Fold6/sony-xperia-1-iv-Black-1000x1000.jpg'
  ],
  specifications: {
    'Display': '6.5" 4K OLED 120Hz',
    'Processor': 'Snapdragon 8 Gen 2',
    'RAM': '12GB',
    'Storage': '256GB',
    'Camera': 'Triple 48MP + 12MP + 12MP',
    'Battery': '5000mAh',
    'OS': 'Android 13'
  },
  stock: 18,
  categoryId: 'branded-mobiles',
  slug: 'sony-xperia-1-v'
},
{
  id: 'bm-015',
  name: 'Samsung Galaxy Z Fold5',
  description: 'Foldable phone with multitasking features and immersive display.',
  price: 1799.99,
  rating: 4.6,
  images: [
    'https://elcytec.com/wp-content/uploads/2024/02/elcytec_samsung_galaxy_z_fold_5_icy_blue_2-600x600.webp'
  ],
  specifications: {
    'Display': '7.6" Foldable AMOLED 120Hz',
    'Processor': 'Snapdragon 8 Gen 2',
    'RAM': '12GB',
    'Storage': '512GB',
    'Camera': 'Triple 50MP + 12MP + 10MP',
    'Battery': '4400mAh',
    'OS': 'Android 13'
  },
  stock: 15,
  categoryId: 'branded-mobiles',
  slug: 'galaxy-z-fold5'
},


  // Electronic Gadgets
  {
    id: 'eg-001',
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and 7-day battery life.',
    price: 89.99,
    discountPrice: 79.99,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/4047038/pexels-photo-4047038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6980558/pexels-photo-6980558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, SpO2, Accelerometer',
      'Connectivity': 'Bluetooth 5.0'
    },
    stock: 65,
    categoryId: 'electronic-gadgets',
    slug: 'smart-fitness-tracker',
    featured: true
  },
  {
    id: 'eg-002',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof Bluetooth speaker with 360° sound and 24-hour battery life.',
    price: 79.99,
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Output Power': '20W',
      'Battery Life': '24 hours',
      'Water Resistance': 'IPX7',
      'Connectivity': 'Bluetooth 5.2, AUX',
      'Dimensions': '180 x 80 x 80mm'
    },
    stock: 58,
    categoryId: 'electronic-gadgets',
    slug: 'portable-bluetooth-speaker'
  },
  {
    id: 'eg-003',
    name: 'Digital Drawing Tablet',
    description: 'Professional drawing tablet with pressure sensitivity and tilt recognition.',
    price: 249.99,
    discountPrice: 219.99,
    rating: 4.7,
    images: [
      'https://m.media-amazon.com/images/I/51LxC0OwABL._SX679_.jpg'
    ],
    specifications: {
      'Active Area': '10 x 6.25 inches',
      'Pressure Levels': '8192',
      'Express Keys': '8 customizable',
      'Connectivity': 'USB-C, Bluetooth',
      'Compatibility': 'Windows, macOS'
    },
    stock: 42,
    categoryId: 'electronic-gadgets',
    slug: 'digital-drawing-tablet'
  },
  {
    id: 'eg-004',
    name: 'Portable Photo Printer',
    description: 'Compact photo printer that connects directly to your smartphone for instant printing.',
    price: 129.99,
    rating: 4.4,
    images: [
      'https://m.media-amazon.com/images/I/81192XA5SxL._SX679_.jpg'
    ],
    specifications: {
      'Print Size': '2 x 3 inches',
      'Technology': 'Zero Ink (ZINK)',
      'Connectivity': 'Bluetooth, Wi-Fi Direct',
      'Battery Life': '25 prints per charge',
      'Dimensions': '120 x 85 x 25mm'
    },
    stock: 37,
    categoryId: 'electronic-gadgets',
    slug: 'portable-photo-printer'
  },
  {
    id: 'eg-005',
    name: 'Smart Key Finder',
    description: 'Never lose your keys again with this Bluetooth-enabled key finder with app support.',
    price: 29.99,
    discountPrice: 24.99,
    rating: 4.3,
    images: [
      'https://m.media-amazon.com/images/I/71+JBRaVnaL._AC_UL320_.jpg'
    ],
    specifications: {
      'Range': 'Up to 200 feet',
      'Battery Life': '1 year (replaceable)',
      'Water Resistance': 'IP67',
      'Features': 'Two-way finding, last location',
      'Compatibility': 'iOS, Android'
    },
    stock: 85,
    categoryId: 'electronic-gadgets',
    slug: 'smart-key-finder'
  },
  {
  id: 'eg-006',
  name: 'Wireless Charging Pad',
  description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
  price: 39.99,
  discountPrice: 29.99,
  rating: 4.4,
  images: [
    'https://poshace.com/media/catalog/product/cache/21c1d50313b949a8e4decbcb2de49f6b/W/i/Wireless-Charger-for-Samsung-Charging-Station-for-Samsung-Galaxy-S24-UltraS24S24S23-UltraS23S23S22Note-20Z-Fl-B091SK8KL3_1.jpg'
  ],
  specifications: {
    'Charging Power': '15W',
    'Compatibility': 'Qi-enabled devices',
    'Connector Type': 'USB-C',
    'Material': 'Aluminum alloy + tempered glass',
    'LED Indicator': 'Yes'
  },
  stock: 75,
  categoryId: 'electronic-gadgets',
  slug: 'wireless-charging-pad'
},
{
  id: 'eg-007',
  name: 'Smart Home Security Camera',
  description: 'Wi-Fi-enabled security camera with night vision and motion detection.',
  price: 99.99,
  rating: 4.6,
  images: [
    'https://poshace.com/media/catalog/product/cache/21c1d50313b949a8e4decbcb2de49f6b/A/m/Amcrest-UltraHD-4K-8MP-Dome-POE-IP-Camera-3840x2160-98ft-NightVision-28mm-Lens-IP67-Weatherproof-125-FOV-256G-B07QHD7LT2.jpg'
  ],
  specifications: {
    'Resolution': '1080p HD',
    'Night Vision': 'Infrared up to 30ft',
    'Field of View': '120° wide-angle',
    'Storage': 'Cloud & microSD',
    'App Support': 'iOS, Android'
  },
  stock: 53,
  categoryId: 'electronic-gadgets',
  slug: 'smart-home-security-camera'
},
{
  id: 'eg-008',
  name: 'Mini Projector',
  description: 'Portable mini projector for home cinema and presentations.',
  price: 149.99,
  discountPrice: 129.99,
  rating: 4.2,
  images: [
    'https://aaryavglobalstores.in/wp-content/uploads/2025/02/81Y8tOdeB6L_AC_SX679_.jpg'
  ],
  specifications: {
    'Display': '1080p Full HD supported',
    'Brightness': '6000 lumens',
    'Projection Size': '40–200 inches',
    'Connectivity': 'HDMI, USB, AV, TF card',
    'Built-in Speaker': 'Yes'
  },
  stock: 48,
  categoryId: 'electronic-gadgets',
  slug: 'mini-projector'
},
{
  id: 'eg-009',
  name: 'Noise Cancelling Earbuds',
  description: 'Wireless earbuds with active noise cancellation and immersive sound.',
  price: 129.99,
  rating: 4.5,
  images: [
    'https://m.media-amazon.com/images/I/51h7CQTRJ1L._SX569_.jpg'
  ],
  specifications: {
    'Battery Life': '8 hours (32h with case)',
    'ANC': 'Active Noise Cancellation',
    'Connectivity': 'Bluetooth 5.3',
    'Water Resistance': 'IPX5',
    'Controls': 'Touch-sensitive'
  },
  stock: 62,
  categoryId: 'electronic-gadgets',
  slug: 'noise-cancelling-earbuds'
},
{
  id: 'eg-010',
  name: 'Smart Light Bulb',
  description: 'Color-changing smart bulb controlled via app or voice assistant.',
  price: 19.99,
  discountPrice: 14.99,
  rating: 4.3,
  images: [
    'https://m.media-amazon.com/images/I/31WrzxlCJ0L._SX342_SY445_QL70_FMwebp_.jpg'
  ],
  specifications: {
    'Brightness': '800 lumens',
    'Color Options': '16 million colors',
    'Voice Control': 'Alexa, Google Assistant',
    'App Control': 'iOS, Android',
    'Power Usage': '9W'
  },
  stock: 95,
  categoryId: 'electronic-gadgets',
  slug: 'smart-light-bulb'
},


  // Electronics
  {
    id: 'e-001',
    name: '65" 4K OLED Smart TV',
    description: 'Immersive viewing experience with OLED technology, Dolby Vision, and smart features.',
    price: 1999.99,
    discountPrice: 1799.99,
    rating: 4.8,
    images: [
      'https://www.ysvara.com/cdn/shop/files/81saydXbVzL.jpg?height=940&v=1740164847',
      'https://www.ysvara.com/cdn/shop/files/41FDZeHMGxL.jpg?height=350&v=1740164847'
    ],
    specifications: {
      'Display': '65" OLED 4K UHD',
      'Resolution': '3840 x 2160',
      'HDR': 'Dolby Vision, HDR10+',
      'Audio': '40W 2.1 Channel',
      'Smart Features': 'Voice Assistant, Streaming Apps',
      'Connectivity': '4x HDMI 2.1, 3x USB, Wi-Fi, Bluetooth'
    },
    stock: 22,
    categoryId: 'electronics',
    slug: '65-inch-4k-oled-smart-tv',
    featured: true
  },
  {
    id: 'e-002',
    name: 'Smart Home Security Camera',
    description: '1080p HD security camera with motion detection, night vision, and two-way audio.',
    price: 79.99,
    rating: 4.5,
    images: [
      'https://images.wiautomation.com/public/images/landing/anticipa/product/23_03_2023_11_52_54_NDP_5502_Z30L_Bosch.jpg'
    ],
    specifications: {
      'Resolution': '1080p HD',
      'Field of View': '130°',
      'Night Vision': 'Up to 30ft',
      'Storage': 'Cloud, microSD',
      'Power': 'Wired, Battery option',
      'Connectivity': 'Wi-Fi'
    },
    stock: 48,
    categoryId: 'electronics',
    slug: 'smart-home-security-camera'
  },
  {
    id: 'e-003',
    name: 'Robot Vacuum Cleaner',
    description: 'Smart robot vacuum with mapping technology, app control, and automatic charging.',
    price: 349.99,
    discountPrice: 299.99,
    rating: 4.6,
    images: [
      'https://m.media-amazon.com/images/I/51FGenr910L._SX679_.jpg'
    ],
    specifications: {
      'Suction Power': '2700Pa',
      'Battery Life': '150 minutes',
      'Mapping': 'LIDAR Technology',
      'Dustbin Capacity': '0.5L',
      'Features': 'App control, voice control, scheduling',
      'Dimensions': '350 x 350 x 97mm'
    },
    stock: 33,
    categoryId: 'electronics',
    slug: 'robot-vacuum-cleaner'
  },
  {
    id: 'e-004',
    name: 'Wireless Noise Cancelling Headphones',
    description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.',
    price: 299.99,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz-20kHz',
      'Battery Life': '30 hours',
      'Noise Cancellation': 'Active, Adaptive',
      'Connectivity': 'Bluetooth 5.0, 3.5mm',
      'Features': 'Touch controls, voice assistant'
    },
    stock: 55,
    categoryId: 'electronics',
    slug: 'wireless-noise-cancelling-headphones'
  },
  {
    id: 'e-005',
    name: 'Smart Coffee Maker',
    description: 'Wi-Fi enabled coffee maker that you can control from your smartphone.',
    price: 149.99,
    discountPrice: 129.99,
    rating: 4.4,
    images: [
      'https://somethingsbrewing.in/cdn/shop/files/DeLonghi_Ecam290.61.B_Magnifica_Evo_Fully_Automatic_Coffee_Machine_Black.jpg?v=1737030537&width=1240'
    ],
    specifications: {
      'Capacity': '12 cups',
      'Programmable': 'Yes, via app',
      'Features': 'Scheduling, custom brewing strength',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Compatibility': 'iOS, Android',
      'Dimensions': '25 x 20 x 35cm'
    },
    stock: 40,
    categoryId: 'electronics',
    slug: 'smart-coffee-maker'
  },
  
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};