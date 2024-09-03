type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type PartialAllType = Pick<AllType, 'name' | 'color'> & Pick<AllType, 'position' | 'weight'>;

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = {
  name: 'TopObject',
  color: 'Red',
  
};

const bottomObject = {
  position: 1,
  weight: 10,
  
};

const result = compare(topObject, bottomObject);
console.log(result);
