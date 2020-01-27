import { AndroidPermissionsGranted, AndroidPermissionsParsed } from "types/Permissions"

export const permissionsParser = (permissions: AndroidPermissionsGranted) : AndroidPermissionsParsed[] => {
    let parsedPermissions: AndroidPermissionsParsed[] = [];
    Object.keys(permissions).map((k: string) => {
        parsedPermissions.push(
            {
                [k]: permissions[k] == "granted"
            }
        );
    });
    return parsedPermissions;
}

export const permissionsGranted = (permissions: AndroidPermissionsGranted) : boolean => {
    const parsedPermissions = permissionsParser(permissions);
    return !parsedPermissions.some((p) => !p);
}